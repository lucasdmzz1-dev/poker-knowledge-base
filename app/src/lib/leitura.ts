import { CHAVE_HUD, STATS, lerHud, type ValorStat } from "@/lib/hud"
import { writeJSON } from "@/lib/storage"

// Leitura dos prints do HUD pelo Claude. A chave é sua e fica só neste navegador;
// a chamada vai direto do navegador para a API da Anthropic.
export const CHAVE_API = "pkb:api-key"
const MODELO = "claude-sonnet-5-5"
const TIPOS = ["image/png", "image/jpeg", "image/webp", "image/gif"]

export interface Leitura {
  valores: Record<string, ValorStat>
  lidas: number
  faltando: string[] // nomes das stats que não apareceram nos prints
}

function base64(blob: Blob): Promise<string> {
  return new Promise((ok, falha) => {
    const r = new FileReader()
    r.onload = () => ok(String(r.result).split(",")[1] ?? "")
    r.onerror = () => falha(r.error)
    r.readAsDataURL(blob)
  })
}

function numeroOuNulo(x: unknown): number | null {
  return typeof x === "number" && Number.isFinite(x) ? x : null
}

export async function lerPrintsComClaude(
  chave: string,
  imagens: Blob[]
): Promise<Leitura> {
  const lista = STATS.map(
    (s, i) => `${i}. ${s.secao} › ${s.bloco} › ${s.nome}`
  ).join("\n")

  const blocos = await Promise.all(
    imagens.map(async (b) => ({
      type: "image",
      source: {
        type: "base64",
        media_type: TIPOS.includes(b.type) ? b.type : "image/png",
        data: await base64(b),
      },
    }))
  )

  const resposta = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": chave,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model: MODELO,
      max_tokens: 16000,
      system:
        "Você extrai números de prints do HUD de poker. Responda só com JSON válido, sem texto antes ou depois. Nunca invente: se um número não estiver legível, use null.",
      messages: [
        {
          role: "user",
          content: [
            ...blocos,
            {
              type: "text",
              text: `Os prints acima são as tabelas de stats do HUD de um mês. Abaixo está a lista numerada das stats que quero. Para cada uma que aparecer nos prints, devolva "v" (valor principal da stat), "ap" (coluna AP, lucro médio) e "nai" (coluna NAI), quando existirem. Use ponto decimal e mantenha o sinal. Se a stat não aparecer, omita-a.

Formato: {"0": {"v": 26, "ap": null, "nai": null}, "5": {"v": 17.2, "ap": -1.5, "nai": null}}

Stats:
${lista}`,
            },
          ],
        },
      ],
    }),
  })

  if (!resposta.ok) {
    const texto = await resposta.text().catch(() => "")
    throw new Error(
      resposta.status === 401
        ? "A chave não foi aceita (401). Confira se copiou inteira."
        : `A API respondeu ${resposta.status}. ${texto.slice(0, 200)}`
    )
  }

  const corpo = (await resposta.json()) as {
    content?: { type: string; text?: string }[]
  }
  const texto = (corpo.content ?? [])
    .filter((c) => c.type === "text")
    .map((c) => c.text ?? "")
    .join("")
  const ini = texto.indexOf("{")
  const fim = texto.lastIndexOf("}")
  if (ini < 0 || fim < ini)
    throw new Error("O Claude não devolveu números legíveis. Tente de novo.")

  let bruto: Record<string, unknown>
  try {
    bruto = JSON.parse(texto.slice(ini, fim + 1)) as Record<string, unknown>
  } catch {
    throw new Error(
      "A resposta veio cortada ou fora do formato. Tente de novo."
    )
  }

  const valores: Record<string, ValorStat> = {}
  for (const [k, x] of Object.entries(bruto)) {
    const stat = STATS[Number(k)]
    if (!stat || typeof x !== "object" || x === null) continue
    const o = x as Record<string, unknown>
    const v = numeroOuNulo(o.v)
    if (v === null) continue
    const val: ValorStat = { v }
    const ap = numeroOuNulo(o.ap)
    const nai = numeroOuNulo(o.nai)
    if (ap !== null) val.ap = ap
    if (nai !== null) val.nai = nai
    valores[stat.id] = val
  }

  return {
    valores,
    lidas: Object.keys(valores).length,
    faltando: STATS.filter((s) => !(s.id in valores)).map((s) => s.nome),
  }
}

// Põe as stats lidas no HUD do mês (cria o mês se não existir). O que o print não
// trouxe fica como estava.
export function aplicarLeitura(mes: string, leitura: Leitura): void {
  const meses = lerHud()
  const existe = meses.some((m) => m.mes === mes)
  const base = existe ? meses : [...meses, { mes, valores: {} }]
  writeJSON(
    CHAVE_HUD,
    base.map((m) =>
      m.mes === mes
        ? { ...m, valores: { ...m.valores, ...leitura.valores } }
        : m
    )
  )
}
