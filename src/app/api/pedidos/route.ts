import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  context: { params: { idProduto: string } }
) {

  // --- 1. RECEBER O ID DO PRODUTO ---
  const idProduto = request.nextUrl.searchParams.get('idProduto');

  if (!idProduto) {
    return NextResponse.json(
      { error: 'Parâmetro [idProduto] é obrigatório na URL.' },
      { status: 400 }
    );
  }

  // --- VARIÁVEIS DE AMBIENTE ---
  const baseUrl = process.env.BLUESOFT_API_BASE_URL;
  const customToken = process.env.BLUESOFT_CUSTOM_TOKEN;

  if (!baseUrl || !customToken) {
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

    const produtoResponse = await fetch(produtoApiUrl, {
      headers,
      cache: 'no-store',
    });

    if (!produtoResponse.ok) {
      return NextResponse.json(
        { error: `Erro ao consultar o produto. Status: ${produtoResponse.status}` },
        { status: produtoResponse.status }
      );
    }

    // --- 3. CONSULTAR A API DE ESTOQUE ---
    const estoqueApiUrl = `${baseUrl}/comercial/estoques?lojaKey=10&produtoKey=${idProduto}`;

    const estoqueResponse = await fetch(estoqueApiUrl, {
      headers,
      cache: 'no-store',
    });

    // --- 4. RETORNAR A RESPOSTA DO ESTOQUE ---
    if (estoqueResponse.status === 200) {
      const estoqueData = await estoqueResponse.json();
      return NextResponse.json(estoqueData, { status: 200 });
    }

    return NextResponse.json(
      { error: `Erro inesperado da API de estoque. Status: ${estoqueResponse.status}` },
      { status: estoqueResponse.status }
    );

  } catch (error) {
    return NextResponse.json(
      { error: 'Erro interno do servidor ao tentar contatar o serviço externo.' },
      { status: 500 }
    );
  }
}