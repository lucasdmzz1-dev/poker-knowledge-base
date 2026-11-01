import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { mod15, tipoById, type TipoId } from "@/data/mod15"
import type { Sessao } from "@/lib/poker"
import { KEYS, readJSON, writeJSON } from "@/lib/storage"

function Bloco({
  titulo,
  children,
}: {
  titulo: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="mb-4 text-[clamp(1.4rem,3vw,1.9rem)] leading-tight font-bold tracking-tight">
        {titulo}
      </h2>
      {children}
    </section>
  )
}

export default function Analise() {
  const [todas, setTodas] = useState<Sessao[]>(() =>
    readJSON<Sessao[]>(KEYS.sessions, [])
  )
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
        lead="Sua evolução nos temas do trainer. Só entram as sessões que você escolheu levar."
      />
      <div className="mx-auto max-w-[1080px] px-5 pb-20">
        <Bloco titulo="Evolução nos temas">
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
              <h3 className="mb-1.5 font-bold">Acerto por tipo de flop</h3>
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
        </Bloco>

        {levadas.length > 0 && (
          <Bloco titulo="Sessões levadas">
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
          </Bloco>
        )}

        <Bloco titulo="Em construção">
          <div className="grid [grid-template-columns:repeat(auto-fill,minmax(220px,1fr))] gap-3">
            {[
              [
                "Leaks do mês",
                "Prints mensais do HUD, com os leaks priorizados e o que fazer.",
              ],
              [
                "Painel semanal",
                "Entrada manual dos números da semana, vindos do Hand2Note.",
              ],
              [
                "Comparação mês a mês",
                "Melhorou, piorou ou ficou igual, por spot.",
              ],
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-2xl border border-dashed p-5 text-muted-foreground"
              >
                <h3 className="font-bold text-foreground">{t}</h3>
                <p className="mt-2">{d}</p>
              </div>
            ))}
          </div>
        </Bloco>
      </div>
    </main>
  )
}
