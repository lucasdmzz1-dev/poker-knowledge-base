import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Comparacao, LeaksDoMes, useLeaks } from "@/components/analise/leaks"
import { MeusDados, PrimeirosPassos } from "@/components/analise/meus-dados"
import { PainelSemanal } from "@/components/analise/painel"
import { Secao } from "@/components/analise/secao"
import { mod15, tipoById, type TipoId } from "@/data/mod15"
import { KEYS, lerSessoes, writeJSON } from "@/lib/storage"
import { cn } from "@/lib/utils"

const ABAS = [
  { id: "leaks", nome: "Leaks do mês" },
  { id: "comparacao", nome: "Comparação" },
  { id: "painel", nome: "Painel semanal" },
  { id: "treino", nome: "Treino" },
] as const

type Aba = (typeof ABAS)[number]["id"]

export default function Analise() {
  const { leaks, salvar } = useLeaks()
  const [aba, setAba] = useState<Aba>("leaks")
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
        lead="Escolha o que você quer ver: os leaks do mês, a comparação com o mês anterior, o painel semanal ou o seu treino."
      />
      <div className="mx-auto max-w-[1080px] px-5 pb-24">
        <PrimeirosPassos aoComecar={() => setAba("leaks")} />
        <div
          role="tablist"
          aria-label="Seções da Análise"
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {ABAS.map((a) => (
            <button
              key={a.id}
              type="button"
              role="tab"
              id={`aba-${a.id}`}
              aria-selected={aba === a.id}
              aria-controls={`painel-${a.id}`}
              onClick={() => setAba(a.id)}
              className={cn(
                "cursor-pointer rounded-full border px-5 py-2.5 text-sm font-medium transition-[background-color,border-color,color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]",
                aba === a.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground"
              )}
            >
              {a.nome}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`painel-${aba}`}
          aria-labelledby={`aba-${aba}`}
        >
          {aba === "leaks" && (
            <LeaksDoMes
              leaks={leaks}
              salvar={salvar}
              abrirPainel={() => setAba("painel")}
            />
          )}
          {aba === "comparacao" && <Comparacao leaks={leaks} />}
          {aba === "painel" && <PainelSemanal />}
          {aba === "treino" && (
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
                      [
                        "Acerto geral",
                        `${Math.round((acertos / total) * 100)}%`,
                      ],
                      ["Decisões", String(total)],
                      ["Sessões", String(levadas.length)],
                    ].map(([k, v]) => (
                      <Card key={k} className="rounded-[14px] p-[18px]">
                        <div className="text-muted-foreground">{k}</div>
                        <div className="text-3xl font-bold tabular-nums">
                          {v}
                        </div>
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

                  <h3 className="mt-10 mb-3 font-bold">Sessões levadas</h3>
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
                </>
              )}
            </Secao>
          )}
        </div>
        <MeusDados />
      </div>
    </main>
  )
}
