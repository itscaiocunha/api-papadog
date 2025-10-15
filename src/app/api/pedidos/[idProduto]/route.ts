import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  _req: NextRequest,
  { params }: { params: { idProduto: string } }
) {
  const { idProduto } = params;

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
  } as const;

  try {
    const produtoApiUrl = `${baseUrl}/comercial/produtos/${idProduto}?pageSize=1000`;
    const produtoResponse = await fetch(produtoApiUrl, { headers, cache: 'no-store' });
    if (!produtoResponse.ok) {
      return NextResponse.json(
        { error: `Erro ao consultar o produto. Status: ${produtoResponse.status}` },
        { status: produtoResponse.status }
      );
    }

    const estoqueApiUrl = `${baseUrl}/comercial/estoques?lojaKey=10&produtoKey=${idProduto}`;
    const estoqueResponse = await fetch(estoqueApiUrl, { headers, cache: 'no-store' });

    if (estoqueResponse.ok) {
      const estoqueData = await estoqueResponse.json();
      return NextResponse.json(estoqueData, { status: 200 });
    }

    return NextResponse.json(
      { error: `Erro inesperado da API de estoque. Status: ${estoqueResponse.status}` },
      { status: estoqueResponse.status }
    );
  } catch (err) {
    console.error('Erro interno ao chamar serviço externo:', err);
    return NextResponse.json(
      { error: 'Erro interno do servidor ao tentar contatar o serviço externo.' },
      { status: 500 }
    );
  }
}
