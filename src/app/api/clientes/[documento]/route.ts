import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ documento: string }> }
) {
  console.log('🚀 [API] Iniciando GET /api/clientes/[documento]');

  // --- PARÂMETROS ---
  const { documento } = await context.params;
  console.log('📦 Parâmetro recebido:', documento);

  if (!documento) {
    console.warn('⚠️ Parâmetro [documento] ausente na URL');
    return NextResponse.json(
      { error: 'Parâmetro [documento] é obrigatório na URL.' },
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

  const bluesoftApiUrl = `${baseUrl}/clientes?documento=${documento}`;
  console.log('🧭 URL final da API Bluesoft:', bluesoftApiUrl);

  // --- CHAMADA À API ---
  try {
    console.log('📡 Enviando requisição para a Bluesoft API...');
    const apiResponse = await fetch(bluesoftApiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'X-Customtoken': customToken,
      },
      cache: 'no-store',
    });

    console.log('✅ Resposta recebida da Bluesoft API:');
    console.log('   ↳ Status:', apiResponse.status);
    console.log('   ↳ OK:', apiResponse.ok);

    // --- STATUS 200 ---
    // --- STATUS 200 ---
    if (apiResponse.status === 200) {
      const data = await apiResponse.json();
      console.log('📊 Dados retornados pela Bluesoft API:', data);

      if (data && Array.isArray(data.data) && data.data.length > 0) {
        const client = data.data[0];
        console.log('🟢 Cliente encontrado na base.');
        console.log('👤 Nome:', client.nomeRazao);
        console.log('🆔 CPF/CNPJ:', client.cpfCnpj);
        console.log('🏠 Endereços:', client.enderecos);
        console.log('📞 Contatos:', client.contatos);

        // --- PREPARAÇÃO DA RESPOSTA COM DADOS ---
        // Pega o primeiro endereço, se existir
        const primaryAddress = (client.enderecos && client.enderecos.length > 0) 
                              ? client.enderecos[0] 
                              : null;

        // Monta o objeto de endereço conforme solicitado
        const enderecoFormatado = primaryAddress 
          ? {
              rua: primaryAddress.rua,
              numero: primaryAddress.numero,
              bairro: primaryAddress.bairro,
              cidade: primaryAddress.cidade,
              uf: primaryAddress.uf,
              cep: primaryAddress.cep,
            }
          : null; // Retorna null se não houver endereço

        // Monta a resposta final
        return NextResponse.json(
{ 
            message: 'Cliente já cadastrado',
            nomeRazao: client.nomeRazao, 
            cpfCnpj: client.cpfCnpj,
            endereco: enderecoFormatado 
          },
          { status: 200 }
        );
      } else {
        console.log('🔴 Cliente não encontrado (data.data vazio).');
        return NextResponse.json(
          { message: 'Cliente não cadastrado' },
          { status: 404 }
       );
     }
  }

    // --- STATUS 400 ---
    if (apiResponse.status === 400) {
      console.log('⚠️ Resposta 400 da Bluesoft API - Cliente não cadastrado.');
      return NextResponse.json(
        { message: 'Cliente não cadastrado' },
        { status: 200 }
      );
    }

    // --- OUTROS ERROS ---
    const errorBody = await apiResponse.text();
    console.error(
      `🔥 Erro da API Bluesoft. Status: ${apiResponse.status}, Body: ${errorBody}`
    );

    return NextResponse.json(
      { error: `Erro inesperado da API externa. Status: ${apiResponse.status}` },
      { status: apiResponse.status }
    );
  } catch (error) {
    console.error('💥 Erro ao conectar com a API da Bluesoft:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor ao tentar contatar o serviço externo.' },
      { status: 500 }
    );
  } finally {
    console.log('🏁 [API] Finalizando execução de /api/clientes/[documento]');
  }
}
