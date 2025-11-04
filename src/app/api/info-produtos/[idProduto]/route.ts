import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  context: { params: { idProduto: string } }
) {
  console.log('🚀 [API] Iniciando GET /api/info-produto/[idProduto]');

  // --- 1. PARÂMETROS ---
  const { idProduto } = context.params;
  console.log('📦 Parâmetro recebido:', idProduto);

  if (!idProduto) {
    console.warn('⚠️ Parâmetro [idProduto] ausente na URL');
    return NextResponse.json(
      { error: 'Parâmetro [idProduto] é obrigatório na URL.' },
      { status: 400 }
    );
  }

  // --- 2. VARIÁVEIS DE AMBIENTE ---
  const baseUrl = process.env.BLUESOFT_API_BASE_URL;
  const customToken = process.env.BLUESOFT_CUSTOM_TOKEN;

  if (!baseUrl || !customToken) {
    console.error(
      '❌ Variáveis de ambiente BLUESOFT_API_BASE_URL ou BLUESOFT_CUSTOM_TOKEN não estão definidas.'
    );
    return NextResponse.json(
      { error: 'Configuração interna do servidor incompleta.' },
      { status: 500 }
    );
  }

  // --- 3. DEFINIÇÃO DAS CHAMADAS ---
  const headers = {
    'Content-Type': 'application/json',
    'X-Customtoken': customToken,
  };

  const urls = {
    infoGerais: `${baseUrl}/comercial/produtos/${idProduto}`,
    estoque: `${baseUrl}/comercial/estoques?lojaKey=10&produtoKey=${idProduto}`,
    precos: `${baseUrl}/comercial/produtos/${idProduto}/precos`,
  };

  console.log('🧭 URL Info Gerais:', urls.infoGerais);
  console.log('🧭 URL Estoque:', urls.estoque);
  console.log('🧭 URL Preços:', urls.precos);

  // --- 4. CHAMADA ÀS APIs ---
  try {
    console.log('📡 Enviando requisições paralelas para a Bluesoft API...');

    const [infoResponse, estoqueResponse, precoResponse] = await Promise.all([
      fetch(urls.infoGerais, { headers, cache: 'no-store' }),
      fetch(urls.estoque, { headers, cache: 'no-store' }),
      fetch(urls.precos, { headers, cache: 'no-store' }),
    ]);

    console.log('✅ Respostas recebidas:');
    console.log('   ↳ Info Gerais Status:', infoResponse.status);
    console.log('   ↳ Estoque Status:', estoqueResponse.status);
    console.log('   ↳ Preços Status:', precoResponse.status);

    // --- 5. VERIFICAÇÃO PRINCIPAL (INFO GERAIS) ---
    if (infoResponse.status === 404) {
      console.log('🔴 Produto não encontrado (404).');
      return NextResponse.json(
        { message: 'Produto não encontrado' },
        { status: 404 }
      );
    }

    if (!infoResponse.ok) {
      console.error(
        `🔥 Erro ao buscar informações gerais. Status: ${infoResponse.status}`
      );
      return NextResponse.json(
        {
          error: `Erro ao buscar informações gerais. Status: ${infoResponse.status}`,
        },
        { status: infoResponse.status }
      );
    }

    // --- 6. PROCESSAMENTO E FORMATAÇÃO DA RESPOSTA ---

    // Processa Info Gerais (obrigatório)
    const infoData = await infoResponse.json();

    // Processa Estoque (opcional)
    let estoqueData = { data: [] }; // Padrão
    if (estoqueResponse.ok) {
      estoqueData = await estoqueResponse.json();
      console.log('📊 Dados de Estoque:', estoqueData);
    } else {
      console.warn(
        `⚠️ Falha ao buscar estoque. Status: ${estoqueResponse.status}`
      );
    }

    // Processa Preços (opcional)
    
    // ***** LINHA CORRIGIDA AQUI *****
    // Definimos o tipo esperado para a array 'precos' para evitar o erro 'never[]'
    let precoData: { precos: { lojaKey: number; precoNormal: number }[] } = {
      precos: [],
    };
    // *******************************

    if (precoResponse.ok) {
      precoData = await precoResponse.json();
      console.log('📊 Dados de Preços:', precoData);
    } else {
      console.warn(
        `⚠️ Falha ao buscar preços. Status: ${precoResponse.status}`
      );
    }

    // --- MONTAGEM DA RESPOSTA FORMATADA ---

    // Pega o primeiro estoque (já que filtramos lojaKey=10 na URL)
    const estoque =
      estoqueData.data && estoqueData.data.length > 0
        ? estoqueData.data[0]
        : { saldoFisico: 0 }; // Padrão com o campo esperado

    // Pega o preço da lojaKey 10
    // Agora o TypeScript sabe o tipo de 'p' e não dará erro
    const precoObj =
      precoData.precos && precoData.precos.length > 0
        ? precoData.precos.find((p) => p.lojaKey === 10)
        : null;

    // Monta a resposta final com os campos exatos que você pediu
    const respostaFormatada = {
      // Info Gerais
      nome: infoData.descricao,
      codBarras: infoData.gtins,

      // Estoque
      estoque: estoque.saldoFisico,

      // Preço
      preco: precoObj ? precoObj.precoNormal : 0.0,
    };

    console.log('🟢 Resposta formatada enviada:', respostaFormatada);
    return NextResponse.json(respostaFormatada, { status: 200 });
  } catch (error) {
    console.error('💥 Erro ao conectar com a API da Bluesoft:', error);
    return NextResponse.json(
      {
        error: 'Erro interno do servidor ao tentar contatar o serviço externo.',
      },
      { status: 500 }
    );
  } finally {
    console.log('🏁 [API] Finalizando execução de /api/info-produto/[idProduto]');
  }
}