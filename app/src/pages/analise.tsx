import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Comparacao, LeaksDoMes, useLeaks } from "@/components/analise/leaks"
import { PainelSemanal } from "@/components/analise/painel"
import { Secao } from "@/components/analise/secao"
import { mod15, tipoById, type TipoId } from "@/data/mod15"
import { KEYS, lerSessoes, writeJSON } from "@/lib/storage"

export default function Analise() {
  const { leaks, salvar } = useLeaks()
  const [todas, setTodas] = useState(lerSessoes)
  const levadas = todas.filter((s) => s.levar)

  function tirar(id: number) {
    const novas = todas.map((s) => (s.id === id ? { ...s, levar: false } : s))
    writeJSON(KEYS.sessions, novas)
    setTodas(novas)
  }

  const itens = levadas.flatMap((s) => s.itens)
  const total = itens.length
  const acertos = itens.filter((x) => x.ok).length
  const porTipo = new Map<string, { n: number; ok: number }>()
  itens.forEach((x) => {
    const o = porTipo.get(x.tipo) ?? { n: 0, ok: 0 }
    o.n++
    if (x.ok) o.ok++
    porTipo.set(x.tipo, o)
  })

  return (
    <main>
      <PageHeader
        title="Análise"
        lead="Seus leaks do mês, a evolução semana a semana e o que o trainer mostra por tema."
      />
      <div className="mx-auto max-w-[1080px] px-5 pb-24">
        <LeaksDoMes leaks={leaks} salvar={salvar} />
        <Comparacao leaks={leaks} />
        <PainelSemanal />

        <Secao
          titulo="Evolução nos temas"
          lead="Só entram as sessões do trainer que você escolheu levar para a Análise."
        >
          {levadas.length === 0 ? (
            <div className="rounded-2xl border border-dashed p-5 text-muted-foreground">
              Nenhuma sessão levada ainda. Ao terminar um treino na Prática,
              escolha "Levar para a Análise".
            </div>
          ) : (
            <>
              <div className="mb-6 grid [grid-template-columns:repeat(auto-fill,minmax(220px,1fr))] gap-3">
                {[
                  ["Acerto geral", `${Math.round((acertos / total) * 100)}%`],
                  ["Decisões", String(total)],
                  ["Sessões", String(levadas.length)],
                ].map(([k, v]) => (
                  <Card key={k} className="rounded-[14px] p-[18px]">
                    <div className="text-muted-foreground">{k}</div>
                    <div className="text-3xl font-bold tabular-nums">{v}</div>
                  </Card>
                ))}
              </div>
              <h3 className="mb-1.5 font-bold">
                Acerto por tipo de flop · {mod15.nome}
              </h3>
              {[...porTipo.entries()].map(([k, o]) => {
                const p = Math.round((o.ok / o.n) * 100)
                return (
                  <div
                    key={k}
                    className="grid grid-cols-[14ch_minmax(0,1fr)_5ch] items-center gap-3 py-2"
                  >
                    <span>{tipoById[k as TipoId]?.nome ?? k}</span>
                    <span className="h-2.5 overflow-hidden rounded-full bg-secondary">
                      <i
                        className="block h-full bg-primary"
                        style={{ width: `${p}%` }}
                      />
                    </span>
                    <span className="tabular-nums">{p}%</span>
                  </div>
                )
              })}
            </>
          )}
        </Secao>

        {levadas.length > 0 && (
          <Secao titulo="Sessões levadas">
            <div className="grid gap-2.5">
              {[...levadas].reverse().map((s) => (
                <div
                  key={s.id}
                  className="flex flex-wrap items-center gap-3.5 rounded-xl border bg-card px-4 py-3.5"
                >
                  <span className="min-w-40 flex-1">
                    <strong>
                      {new Date(s.id).toLocaleDateString("pt-BR")}
                    </strong>{" "}
                    · {mod15.nome}
                  </span>
                  <span className="tabular-nums">
                    {s.acertos} de {s.total}
                  </span>
                  <Button variant="outline" onClick={() => tirar(s.id)}>
                    Tirar da análise
                  </Button>
                </div>
              ))}
            </div>
          </Secao>
        )}
      </div>
    </main>
  )
}
