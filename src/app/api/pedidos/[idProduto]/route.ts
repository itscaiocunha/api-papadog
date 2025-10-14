import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { idProduto: string } }
) {
  console.log('🚀 [API] Iniciando GET /api/produtos/[idProduto]');

  // --- 1. RECEBER O ID DO PRODUTO ---
  const { idProduto } = params;
  console.log('📦 Parâmetro de rota recebido:', idProduto);

  if (!idProduto) {
    console.warn('⚠️ Parâmetro [idProduto] ausente na rota');
    return NextResponse.json(
      { error: 'Parâmetro [idProduto] é obrigatório na rota.' },
      { status: 400 }
    );
  }

  // --- VARIÁVEIS DE AMBIENTE ---
  const baseUrl = process.env.BLUESOFT_API_BASE_URL;
  const customToken = process.env.BLUESOFT_CUSTOM_TOKEN;
  console.log('🌐 BLUESOFT_API_BASE_URL:', baseUrl);
  console.log('🔑 BLUESOFT_CUSTOM_TOKEN (oculto):', !!customToken);

  if (!baseUrl || !customToken) {
    console.error(
      '❌ Variáveis de ambiente BLUESOFT_API_BASE_URL ou BLUESOFT_CUSTOM_TOKEN não estão definidas.'
    );
    return NextResponse.json(
      { error: 'Configuração interna do servidor incompleta.' },
      { status: 500 }
    );
  }

  const headers = {
    'Content-Type': 'application/json',
    'X-Customtoken': customToken,
  };

  try {
    // --- 2. CONSULTAR A API DE PRODUTOS ---
    const produtoApiUrl = `${baseUrl}/comercial/produtos/${idProduto}?pageSize=1000`;
    console.log('📡 Consultando API de produtos:', produtoApiUrl);

    const produtoResponse = await fetch(produtoApiUrl, {
      headers,
      cache: 'no-store',
    });

    console.log('✅ Resposta da API de produtos - Status:', produtoResponse.status);

    if (!produtoResponse.ok) {
      // Se a consulta de produto falhar, interrompe o fluxo
      const errorBody = await produtoResponse.text();
      console.error(
        `🔥 Erro ao consultar produto. Status: ${produtoResponse.status}, Body: ${errorBody}`
      );
      return NextResponse.json(
        { error: `Erro ao consultar o produto. Status: ${produtoResponse.status}` },
        { status: produtoResponse.status }
      );
    }
    
    // Opcional: Você pode usar os dados do produto aqui se precisar
    const produtoData = await produtoResponse.json();
    console.log('📊 Dados do produto recebidos:', produtoData);


    // --- 3. CONSULTAR A API DE ESTOQUE ---
    const estoqueApiUrl = `${baseUrl}/comercial/estoques?lojaKey=10&produtoKey=${idProduto}`;
    console.log('📡 Consultando API de estoque:', estoqueApiUrl);

    const estoqueResponse = await fetch(estoqueApiUrl, {
      headers,
      cache: 'no-store',
    });

    console.log('✅ Resposta da API de estoque - Status:', estoqueResponse.status);

    // --- 4. RETORNAR A RESPOSTA DO ESTOQUE ---
    if (estoqueResponse.status === 200) {
      const estoqueData = await estoqueResponse.json();
      console.log('🟢 Estoque encontrado. Retornando dados:', estoqueData);
      return NextResponse.json(estoqueData, { status: 200 });
    }

    // --- Tratamento de outros erros da API de estoque ---
    const errorBody = await estoqueResponse.text();
    console.error(
      `🔥 Erro da API de estoque. Status: ${estoqueResponse.status}, Body: ${errorBody}`
    );

    return NextResponse.json(
      { error: `Erro inesperado da API de estoque. Status: ${estoqueResponse.status}` },
      { status: estoqueResponse.status }
    );

  } catch (error) {
    console.error('💥 Erro ao conectar com a API da Bluesoft:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor ao tentar contatar o serviço externo.' },
      { status: 500 }
    );
  } finally {
    console.log('🏁 [API] Finalizando execução de /api/pedidos/[idProduto]');
  }
}