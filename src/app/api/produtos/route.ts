// src/app/api/produtos/search/route.ts
import { NextResponse } from 'next/server';

const PAGE_SIZE = parseInt(process.env.BLUESOFT_PAGE_SIZE || '500', 10); // ajuste conforme necessário
const MAX_PAGES  = parseInt(process.env.BLUESOFT_MAX_PAGES  || '50', 10); // trava de segurança
const REQUEST_TIMEOUT_MS = parseInt(process.env.REQUEST_TIMEOUT_MS || '20000', 10); // 20s

// Remove acentos e normaliza para comparação case-insensitive
function normalize(str: string) {
  return str
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim();
}

type BluesoftProduto = {
  // ajuste os campos conforme o payload real
  key?: number | string;
  sku?: string;
  codigo?: string;
  nome?: string;
  descricao?: string;
  [k: string]: any;
};

async function fetchWithTimeout(url: string, init: RequestInit, timeoutMs: number) {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...init, signal: ctrl.signal, cache: 'no-store' });
    return res;
  } finally {
    clearTimeout(id);
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const q = url.searchParams.get('q') ?? url.searchParams.get('nome'); // aceita ?q= ou ?nome=
  const limit = Math.max(0, Math.min( // trava entre 0 e 5000
    parseInt(url.searchParams.get('limit') || '100', 10), 5000
  ));

  if (!q || !q.trim()) {
    return NextResponse.json(
      { error: 'Parâmetro de busca ausente. Use ?q=<termo>.' },
      { status: 400 }
    );
  }

  const baseUrl    = process.env.BLUESOFT_API_BASE_URL;
  const customToken = process.env.BLUESOFT_CUSTOM_TOKEN;
  if (!baseUrl || !customToken) {
    return NextResponse.json(
      { error: 'Variáveis de ambiente ausentes: BLUESOFT_API_BASE_URL / BLUESOFT_CUSTOM_TOKEN.' },
      { status: 500 }
    );
  }

  const wanted = normalize(q);
  const headers = {
    'Content-Type': 'application/json',
    'X-Customtoken': customToken,
  } as const;

  const encontrados: BluesoftProduto[] = [];
  let page = 1;

  try {
    while (page <= MAX_PAGES) {
      const listUrl = `${baseUrl}/comercial/produtos?page=${page}&pageSize=${PAGE_SIZE}`;

      const resp = await fetchWithTimeout(listUrl, { headers }, REQUEST_TIMEOUT_MS);
      if (!resp.ok) {
        return NextResponse.json(
          { error: `Bluesoft retornou ${resp.status} em ${listUrl}` },
          { status: resp.status }
        );
      }

      const data = await resp.json();
      const items: BluesoftProduto[] = Array.isArray(data?.items) ? data.items
                                : Array.isArray(data) ? data
                                : [];

      // Filtro por nome/descrição (ajuste campos conforme payload real)
      for (const item of items) {
        const nome = item?.nome ?? item?.descricao ?? '';
        if (nome && normalize(nome).includes(wanted)) {
          encontrados.push(item);
          if (limit && encontrados.length >= limit) {
            return NextResponse.json({ total: encontrados.length, items: encontrados }, { status: 200 });
          }
        }
      }

      // Se veio menos que PAGE_SIZE, provavelmente acabou a paginação
      if (!items.length || items.length < PAGE_SIZE) {
        break;
      }

      page += 1;
    }

    return NextResponse.json({ total: encontrados.length, items: encontrados }, { status: 200 });
  } catch (err) {
    // AbortError, timeouts, rede, etc.
    const msg = (err as Error)?.message || String(err);
    return NextResponse.json(
      { error: 'Falha ao consultar Bluesoft', detail: msg },
      { status: 502 }
    );
  }
}
