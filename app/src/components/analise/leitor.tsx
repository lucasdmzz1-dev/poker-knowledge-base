import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CAMPO } from "@/components/analise/secao"
import { rotuloMes } from "@/lib/analise"
import {
  CHAVE_API,
  aplicarLeitura,
  lerPrintsComClaude,
  type Leitura,
} from "@/lib/leitura"
import { listarPrints } from "@/lib/prints"

function lerChave(): string {
  try {
    return localStorage.getItem(CHAVE_API) ?? ""
  } catch {
    return ""
  }
}

export function LeitorDePrints({
  mes,
  aoAplicar,
}: {
  mes: string
  aoAplicar: () => void
}) {
  const [chave, setChave] = useState(lerChave)
  const [lendo, setLendo] = useState(false)
  const [erro, setErro] = useState("")
  const [leitura, setLeitura] = useState<Leitura | null>(null)
  const [aplicado, setAplicado] = useState(false)

  function guardarChave(v: string) {
    setChave(v)
    try {
      if (v.trim()) localStorage.setItem(CHAVE_API, v.trim())
      else localStorage.removeItem(CHAVE_API)
    } catch {
      /* sem armazenamento: a chave vale só até recarregar */
    }
  }

  async function ler() {
    setErro("")
    setLeitura(null)
    setAplicado(false)
    setLendo(true)
    try {
      const prints = await listarPrints(mes)
      if (prints.length === 0) {
        setErro(`Não há prints de ${rotuloMes(mes)}. Suba-os acima primeiro.`)
        return
      }
      setLeitura(
        await lerPrintsComClaude(
          chave.trim(),
          prints.map((p) => p.blob)
        )
      )
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Não consegui ler os prints.")
    } finally {
      setLendo(false)
    }
  }

  return (
    <div className="mb-8 rounded-2xl border bg-card/40 p-4">
      <h3 className="mb-1 font-bold">Ler os prints com o Claude</h3>
      <p className="mb-3 max-w-[70ch] text-sm text-muted-foreground">
        O Claude lê os prints de {rotuloMes(mes)} e preenche as stats. Antes de
        aplicar, você vê quantas ele achou. A chave fica só neste navegador e a
        leitura é cobrada na sua conta da Anthropic.
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          Chave da API
          <input
            type="password"
            autoComplete="off"
            value={chave}
            onChange={(e) => guardarChave(e.target.value)}
            placeholder="sk-ant-…"
            className={`${CAMPO} w-64`}
          />
        </label>
        <Button
          className="h-10 px-5 font-bold"
          disabled={lendo || chave.trim() === ""}
          onClick={() => void ler()}
        >
          {lendo ? "Lendo os prints…" : "Ler os prints"}
        </Button>
      </div>
      <p role="alert" className="mt-2 min-h-5 text-sm text-destructive">
        {erro}
      </p>

      {leitura && (
        <div className="mt-2 grid gap-3">
          <p>
            Li <b className="text-primary">{leitura.lidas}</b> stats. Não
            apareceram nos prints: <b>{leitura.faltando.length}</b>
            {leitura.faltando.length > 0 && (
              <span className="text-muted-foreground">
                {" "}
                (ex.: {leitura.faltando.slice(0, 5).join(", ")})
              </span>
            )}
            .
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              className="h-10 px-5 font-bold"
              disabled={aplicado || leitura.lidas === 0}
              onClick={() => {
                aplicarLeitura(mes, leitura)
                setAplicado(true)
                aoAplicar()
              }}
            >
              {aplicado ? "Aplicado" : `Aplicar ao HUD de ${rotuloMes(mes)}`}
            </Button>
            <span className="text-sm text-muted-foreground">
              Confira os números abaixo; qualquer um dá para corrigir em "Editar
              valores".
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
