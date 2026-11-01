import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Secao, CAMPO } from "@/components/analise/secao"
import { CHAVES, fmt, lerPainel, novoId, type Painel } from "@/lib/analise"
import { writeJSON } from "@/lib/storage"
import { cn } from "@/lib/utils"

function ultimaVariacao(painel: Painel, metrica: string): number | null {
  const valores = painel.semanas
    .map((s) => s.valores[metrica])
    .filter((v): v is number => typeof v === "number")
  if (valores.length < 2) return null
  return (
    Math.round(
      (valores[valores.length - 1] - valores[valores.length - 2]) * 10
    ) / 10
  )
}

export function PainelSemanal() {
  const [painel, setPainel] = useState<Painel>(lerPainel)
  const [rotulo, setRotulo] = useState("")
  const [metrica, setMetrica] = useState("")

  const salvar = (p: Painel) => {
    setPainel(p)
    writeJSON(CHAVES.painel, p)
  }

  function adicionarSemana(e: React.FormEvent) {
    e.preventDefault()
    const r = rotulo.trim()
    if (!r) return
    salvar({
      ...painel,
      semanas: [...painel.semanas, { id: novoId(), rotulo: r, valores: {} }],
    })
    setRotulo("")
  }

  function adicionarMetrica(e: React.FormEvent) {
    e.preventDefault()
    const m = metrica.trim()
    if (!m || painel.metricas.includes(m)) return
    salvar({ ...painel, metricas: [...painel.metricas, m] })
    setMetrica("")
  }

  function definir(semanaId: string, m: string, texto: string) {
    const n = Number(texto.replace(",", "."))
    const valor = texto.trim() === "" || Number.isNaN(n) ? null : n
    salvar({
      ...painel,
      semanas: painel.semanas.map((s) =>
        s.id === semanaId ? { ...s, valores: { ...s.valores, [m]: valor } } : s
      ),
    })
  }

  return (
    <Secao
      titulo="Painel semanal"
      lead="Copie os números da semana do Hand2Note. A última coluna mostra a variação da última semana contra a anterior."
    >
      <div className="mb-4 flex flex-wrap gap-4">
        <form onSubmit={adicionarSemana} className="flex gap-2">
          <input
            value={rotulo}
            onChange={(e) => setRotulo(e.target.value)}
            placeholder="Semana, ex.: 20 a 26/10"
            aria-label="Nome da nova semana"
            className={cn(CAMPO, "w-56")}
          />
          <Button type="submit" variant="outline">
            Adicionar semana
          </Button>
        </form>
        <form onSubmit={adicionarMetrica} className="flex gap-2">
          <input
            value={metrica}
            onChange={(e) => setMetrica(e.target.value)}
            placeholder="Nova métrica"
            aria-label="Nome da nova métrica"
            className={cn(CAMPO, "w-44")}
          />
          <Button type="submit" variant="outline">
            Adicionar métrica
          </Button>
        </form>
      </div>

      {painel.semanas.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-5 text-muted-foreground">
          Nenhuma semana ainda. Adicione a primeira e preencha os números.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full border-collapse text-left">
            <thead className="bg-card text-sm text-muted-foreground">
              <tr>
                <th className="p-3 font-medium">Métrica (%)</th>
                {painel.semanas.map((s) => (
                  <th key={s.id} className="p-3 font-medium whitespace-nowrap">
                    {s.rotulo}
                    <button
                      type="button"
                      aria-label={`Remover a semana ${s.rotulo}`}
                      className="ml-2 cursor-pointer text-xs underline-offset-4 hover:text-foreground hover:underline"
                      onClick={() =>
                        salvar({
                          ...painel,
                          semanas: painel.semanas.filter((x) => x.id !== s.id),
                        })
                      }
                    >
                      remover
                    </button>
                  </th>
                ))}
                <th className="p-3 font-medium">Variação</th>
              </tr>
            </thead>
            <tbody>
              {painel.metricas.map((m) => {
                const v = ultimaVariacao(painel, m)
                return (
                  <tr key={m} className="border-t">
                    <th
                      scope="row"
                      className="p-3 font-medium whitespace-nowrap"
                    >
                      {m}
                      <button
                        type="button"
                        aria-label={`Remover a métrica ${m}`}
                        className="ml-2 cursor-pointer text-xs font-normal text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                        onClick={() =>
                          salvar({
                            ...painel,
                            metricas: painel.metricas.filter((x) => x !== m),
                          })
                        }
                      >
                        remover
                      </button>
                    </th>
                    {painel.semanas.map((s) => (
                      <td key={s.id} className="p-2">
                        <input
                          inputMode="decimal"
                          aria-label={`${m}, ${s.rotulo}`}
                          defaultValue={
                            typeof s.valores[m] === "number"
                              ? String(s.valores[m]).replace(".", ",")
                              : ""
                          }
                          onBlur={(e) => definir(s.id, m, e.target.value)}
                          className={cn(CAMPO, "w-24 tabular-nums")}
                        />
                      </td>
                    ))}
                    <td className="p-3 text-muted-foreground tabular-nums">
                      {v === null ? "–" : `${v > 0 ? "+" : ""}${fmt(v)} pts`}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </Secao>
  )
}
