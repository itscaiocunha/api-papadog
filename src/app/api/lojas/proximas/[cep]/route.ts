import { NextRequest, NextResponse } from 'next/server';
import { LOJAS, Loja } from '@/data/lojas'; 

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}

function calcularDistanciaKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Raio da Terra em km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// --- ROTA GET ---
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ cep: string }> }
) {
  console.log('🚀 [API] Iniciando busca de lojas próximas por CEP');

  const { cep } = await context.params;

  if (!cep || cep.length < 8) {
    return NextResponse.json(
      { error: 'CEP inválido ou não fornecido.' },
      { status: 400 }
    );
  }

  try {
    console.log(`📡 Consultando dados do CEP: ${cep}`);
    const cepResponse = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`, {
      cache: 'no-store',
    });

    if (!cepResponse.ok) {
      return NextResponse.json(
        { error: 'CEP não encontrado na base de dados externa.' },
        { status: 404 }
      );
    }

    const cepData = await cepResponse.json();
    
    let userLat: number | null = null;
    let userLon: number | null = null;

    // 1. Tenta pegar coordenadas da BrasilAPI
    if (cepData.location?.coordinates?.latitude && cepData.location?.coordinates?.longitude) {
       userLat = parseFloat(cepData.location.coordinates.latitude);
       userLon = parseFloat(cepData.location.coordinates.longitude);
    }

    // 2. PLANO B: Se BrasilAPI falhou nas coordenadas, tenta OpenStreetMap (Nominatim)
    if (!userLat || !userLon) {
      console.log('⚠️ BrasilAPI sem coordenadas. Tentando OpenStreetMap (Nominatim)...');
      
      // Monta o endereço para busca: Rua, Cidade, Estado
      const queryEndereco = `${cepData.street}, ${cepData.city}, ${cepData.state}, Brazil`;
      const nominatimUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(queryEndereco)}&limit=1`;

      try {
        const osmResponse = await fetch(nominatimUrl, {
          headers: { 'User-Agent': 'ApiPapadog/1.0' } // Obrigatório identificar
        });

        if (osmResponse.ok) {
          const osmData = await osmResponse.json();
          if (osmData && osmData.length > 0) {
            userLat = parseFloat(osmData[0].lat);
            userLon = parseFloat(osmData[0].lon);
            console.log('✅ Coordenadas recuperadas via OpenStreetMap!');
          }
        }
      } catch (err) {
        console.error('❌ Falha no fallback do OpenStreetMap:', err);
      }
    }

    // Se ainda assim não tivermos coordenadas, não dá para calcular
    if (userLat === null || userLon === null || isNaN(userLat) || isNaN(userLon)) {
      return NextResponse.json(
        { 
          error: 'Endereço localizado, mas não foi possível obter as coordenadas geográficas para cálculo de distância.',
          endereco: cepData 
        },
        { status: 422 }
      );
    }

    console.log(`📍 Coordenadas finais do cliente: Lat ${userLat}, Lon ${userLon}`);

    // 3. Filtrar lojas com coordenadas cadastradas
    const lojasComCoordenadas = LOJAS.filter(
      (loja): loja is Loja & { latitude: number; longitude: number } => 
      loja.latitude !== undefined && loja.longitude !== undefined && loja.latitude !== 0
    );

    if (lojasComCoordenadas.length === 0) {
      return NextResponse.json(
        { 
          message: 'Nenhuma loja com coordenadas cadastradas foi encontrada no sistema.',
          aviso: 'É necessário cadastrar a latitude e longitude das lojas no arquivo src/data/lojas.ts'
        },
        { status: 200 }
      );
    }

    // 4. Calcular distâncias
    const lojasComDistancia = lojasComCoordenadas.map((loja) => {
      const distancia = calcularDistanciaKm(userLat!, userLon!, loja.latitude, loja.longitude);
      return { ...loja, distanciaKm: distancia };
    });

    // 5. Ordenar
    lojasComDistancia.sort((a, b) => a.distanciaKm - b.distanciaKm);

    // 6. Pegar Top 3
    const top3Lojas = lojasComDistancia.slice(0, 3);

    return NextResponse.json({
      cep_consultado: {
        ...cepData,
        location: {
          type: "Point",
          coordinates: { latitude: userLat, longitude: userLon } // Injetamos a coordenada descoberta
        }
      },
      lojas_proximas: top3Lojas.map(l => ({
        nome: l.nome,
        endereco: l.endereco,
        telefone: l.telefone,
        distancia: `${l.distanciaKm.toFixed(2)} km`
      }))
    });

  } catch (error) {
    console.error('💥 Erro interno:', error);
    return NextResponse.json(
      { error: 'Erro interno ao processar a solicitação.' },
      { status: 500 }
    );
  }
}