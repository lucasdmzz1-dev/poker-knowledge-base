import { Link } from "react-router-dom"
import { Cards, RngPlate } from "@/components/poker/cards"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { COR_NIVEL, nivelStat } from "@/lib/hud"
import { lerUltimo } from "@/lib/storage"
import { cn } from "@/lib/utils"

const CARD =
  "group h-full bg-card hover:border-primary hover:bg-secondary relative flex flex-col gap-5 overflow-hidden rounded-[22px] border p-6 transition-[transform,border-color,background-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.985] [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1 motion-reduce:[@media(hover:hover)_and_(pointer:fine)]:hover:translate-y-0"

function Passo({
  n,
  titulo,
  texto,
  to,
  children,
}: {
  n: number
  titulo: string
  texto: string
  to: string
  children: React.ReactNode
}) {
  return (
    <div className="enter" style={{ "--i": n - 1 } as React.CSSProperties}>
      <Link to={to} className={CARD}>
        <div className="grid min-h-[190px] place-items-center rounded-2xl border bg-background/60 p-4">
          {children}
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Passo {n}</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight">{titulo}</h2>
          <p className="mt-2 max-w-[34ch] text-muted-foreground">{texto}</p>
        </div>
        <span
          aria-hidden="true"
          className="mt-auto text-2xl leading-none text-primary transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-x-1 motion-reduce:[@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-x-0"
        >
          ›
        </span>
      </Link>
    </div>
  )
}

export default function Home() {
  const last = lerUltimo({
    to: "/teoria/bet-vs-missed",
    label: "Bet vs Missed C-Bet · Teoria",
  })
  return (
    <main>
      <section className="mx-auto flex max-w-[1080px] flex-col items-center px-5 pt-16 pb-14 text-center md:pt-24">
        <Link
          to="/teoria/bet-vs-missed"
          className="inline-flex items-center gap-2 rounded-full border bg-card/60 py-1.5 pr-4 pl-1.5 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
        >
          <Badge className="rounded-full">Novo</Badge>
          Módulo 15 disponível: Bet vs Missed C-Bet ›
        </Link>
        <h1 className="mt-8 max-w-[16ch] text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.98] font-bold tracking-[-0.035em] text-balance">
          O que você quer fazer hoje?
        </h1>
        <p className="mt-6 max-w-[46ch] text-[clamp(1.05rem,1.8vw,1.35rem)] leading-snug text-muted-foreground">
          Entenda a teoria, treine a decisão e veja onde você perde. Um ciclo de
          estudo feito para o seu jogo de torneio.
        </p>
      </section>

      <section className="mx-auto max-w-[1080px] px-5 pb-28">
        <div className="grid gap-4 md:grid-cols-3">
          <Passo
            n={1}
            titulo="Teoria"
            texto="Guidelines padronizados, com exemplos de mesa e os porquês de cada regra."
            to="/teoria"
          >
            <div className="flex flex-col items-center gap-3">
              <Cards codes={["Js", "9h", "6c"]} size="md" />
              <span className="rounded-full bg-b50 px-3 py-1 text-sm font-bold text-[#1a0907]">
                B50
              </span>
            </div>
          </Passo>
          <Passo
            n={2}
            titulo="Prática"
            texto="Um trainer pós-flop com mão, board e RNG. Você decide e vê a conta."
            to="/pratica"
          >
            <div className="flex items-center gap-4">
              <Cards codes={["Ad", "Ac"]} size="md" />
              <RngPlate value={64} className="min-w-0 px-3 py-1 text-3xl" />
            </div>
          </Passo>
          <Passo
            n={3}
            titulo="Análise"
            texto="Seus leaks do mês e a evolução nos temas, para saber onde atacar."
            to="/analise"
          >
            <div className="grid w-full max-w-[260px] gap-2.5">
              {[
                ["VPIP", 26, "26-29"],
                ["PFR", 17, "20-23"],
                ["3bet", 9.4, "11-14"],
              ].map(([nome, v, meta]) => (
                <div
                  key={nome}
                  className="grid grid-cols-[2.6rem_1fr_2rem_3.2rem] items-center gap-2 text-sm"
                >
                  <span className="text-muted-foreground">{nome}</span>
                  <span className="h-2 overflow-hidden rounded-full bg-secondary">
                    <i
                      className="block h-full rounded-full bg-primary"
                      style={{ width: `${(Number(v) / 40) * 100}%` }}
                    />
                  </span>
                  <span
                    className={cn(
                      "text-right font-bold tabular-nums",
                      COR_NIVEL[nivelStat(Number(v), String(meta)) ?? "alvo"]
                    )}
                  >
                    {String(v).replace(".", ",")}
                  </span>
                  <span className="text-right text-xs text-muted-foreground tabular-nums">
                    {String(meta).replace("-", "–")}
                  </span>
                </div>
              ))}
            </div>
          </Passo>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full px-7 text-base font-bold active:scale-[0.97]"
          >
            <Link to={last.to}>
              {last.verbo ?? "Continuar"}: {last.label}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-full px-7 text-base font-bold active:scale-[0.97]"
          >
            <Link to="/teoria">Ver os temas</Link>
          </Button>
        </div>
      </section>

      <footer className="mx-auto max-w-[1080px] px-5 pb-12 text-center text-sm text-muted-foreground">
        Poker KB · protótipo do módulo 15
      </footer>
    </main>
  )
}
