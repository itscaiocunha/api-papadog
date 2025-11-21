import fs from 'fs';
import path from 'path';
import { LOJAS, Loja } from '../src/data/lojas';

// ---------------------------------------------------------------------------
// 🔑 COLOQUE SUA CHAVE DA GEOAPIFY AQUI (NÃO PRECISA DE CARTÃO)
const GEOAPIFY_KEY = '9b8c57142cc4444f8ce1c3aba9a18295';
// ---------------------------------------------------------------------------

// Função para limpar o endereço e facilitar a busca
function limparEndereco(endereco: string): string {
  // Remove termos que confundem a busca (Loja, Lote, Box, etc)
  let limpo = endereco
    .replace(/LOJA\s*:?\s*[\w\d\/\s]+/gi, '')
    .replace(/BOX\s*:?\s*[\w\d\/\s]+/gi, '')
    .replace(/LOTE\s*:?\s*[\w\d\/\s]+/gi, '')
    .replace(/QUADRA\s*:?\s*[\w\d\/\s]+/gi, '')
    .replace(/CEP:?\s*[\d.-]+/gi, '') // Remove CEP do texto (Geoapify prefere cidade/estado)
    .replace(/\s*-\s*RJ/gi, ', Rio de Janeiro, Brasil')
    .replace(/\s*-\s*SP/gi, ', São Paulo, Brasil')
    .replace(/\s*-\s*MG/gi, ', Minas Gerais, Brasil');

  // Remove espaços extras e pontuação solta
  return limpo.replace(/\s+/g, ' ').replace(/,\s*,/g, ',').trim();
}

async function buscarCoordenadasGeoapify() {
  console.log(`🚀 Iniciando geocodificação via Geoapify para ${LOJAS.length} lojas...`);
  
  const lojasAtualizadas: Loja[] = [];
  const erros: string[] = [];

  for (const [index, loja] of LOJAS.entries()) {
    // Se já tiver coordenada válida, mantém
    if (loja.latitude !== 0 && loja.longitude !== 0) {
      lojasAtualizadas.push(loja);
      continue;
    }

    const enderecoBusca = limparEndereco(loja.endereco);
    console.log(`\n[${index + 1}/${LOJAS.length}] Buscando: "${loja.nome}"`);
    console.log(`   📍 Query: "${enderecoBusca}"`);

    try {
      // Geoapify Search API
      const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(enderecoBusca)}&apiKey=${GEOAPIFY_KEY}&limit=1`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Erro na API: ${response.statusText}`);
      }

      const data = await response.json();

      if (data.features && data.features.length > 0) {
        const props = data.features[0].properties;
        const lat = props.lat;
        const lon = props.lon;
        
        // Nível de confiança (rank). properties.rank.confidence varia de 0 a 1
        const confianca = props.rank?.confidence || 0;
        const tipo = props.result_type; // street, building, postcode, etc.

        console.log(`   ✅ Sucesso (${tipo} - Confiança: ${confianca}): Lat ${lat}, Lon ${lon}`);

        lojasAtualizadas.push({
          ...loja,
          latitude: lat,
          longitude: lon
        });
      } else {
        console.log(`   🔴 Não encontrado.`);
        lojasAtualizadas.push(loja); 
        erros.push(`${loja.nome} (Endereço não localizado)`);
      }

    } catch (error) {
      console.error(`   💥 Erro de requisição:`, error);
      lojasAtualizadas.push(loja);
      erros.push(`${loja.nome} (Erro de rede)`);
    }

    // Pequeno delay para ser gentil com a API gratuita
    await new Promise(r => setTimeout(r, 300));
  }

  // --- SALVAR ARQUIVO ---
  const conteudoArquivo = `
import { Loja } from './lojas';

export interface Loja {
  id: string;
  nome: string;
  razaoSocial: string;
  endereco: string;
  telefone: string;
  latitude: number;
  longitude: number;
}

export const LOJAS: Loja[] = ${JSON.stringify(lojasAtualizadas, null, 2)};
`;

  const caminhoSaida = path.join(process.cwd(), 'src', 'data', 'lojas_geoapify.ts');
  fs.writeFileSync(caminhoSaida, conteudoArquivo);

  console.log('\n==================================================');
  console.log(`🏁 Finalizado! Arquivo gerado: ${caminhoSaida}`);
  console.log(`📊 Sucesso: ${LOJAS.length - erros.length} / ${LOJAS.length}`);
  if (erros.length > 0) {
    console.log(`⚠️  Lojas com falha (${erros.length}):`);
    erros.forEach(e => console.log(`   - ${e}`));
  }
  console.log('==================================================');
}

buscarCoordenadasGeoapify();