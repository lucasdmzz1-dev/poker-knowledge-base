// Relatos de erro das questões da Prática. Cada relato fica salvo no aparelho
// (pkb:relatos) e, com conta e nuvem ligadas, também vai para a tabela
// relatos_erro do Supabase (docs/Supabase-Poker-KB.sql).
import { nuvemAtiva, sessaoValida } from "@/lib/nuvem"
import { readJSON, writeJSON } from "@/lib/storage"

const CHAVE = "pkb:relatos"
const URL_BASE = (import.meta.env.VITE_SUPABASE_URL as string | undefined)
  ?.trim()
  .replace(/\/$/, "")
const CHAVE_PUBLICA = (
  import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined
)?.trim()

export interface Relato {
  id: number
  data: string
  tema: string
  questao: string
  comentario: string
  // O que o jogador viu: board, mão, posição, resposta e a ação certa.
  contexto: Record<string, string>
  enviado: boolean
}

export type Destino = "nuvem" | "aparelho"

export function lerRelatos(): Relato[] {
  return readJSON<Relato[]>(CHAVE, [], Array.isArray)
}

// Guarda no aparelho e tenta mandar para a nuvem. Devolve onde o relato ficou.
export async function enviarRelato(
  r: Omit<Relato, "id" | "data" | "enviado">
): Promise<Destino> {
  const relato: Relato = {
    ...r,
    id: Date.now(),
    data: new Date().toISOString(),
    enviado: false,
  }
  let destino: Destino = "aparelho"
  if (nuvemAtiva) {
    const sessao = await sessaoValida()
    if (sessao) {
      let resposta: Response
      try {
        resposta = await fetch(`${URL_BASE}/rest/v1/relatos_erro`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            apikey: CHAVE_PUBLICA ?? "",
            authorization: `Bearer ${sessao.access_token}`,
          },
          body: JSON.stringify({
            tema: relato.tema,
            questao: relato.questao,
            comentario: relato.comentario,
            contexto: relato.contexto,
          }),
        })
      } catch {
        throw new Error("Sem conexão com o servidor. Tente de novo.")
      }
      if (!resposta.ok)
        throw new Error("Não consegui enviar agora. Tente de novo.")
      relato.enviado = true
      destino = "nuvem"
    }
  }
  writeJSON(CHAVE, [...lerRelatos(), relato])
  return destino
}
