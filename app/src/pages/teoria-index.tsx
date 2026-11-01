import { Link } from "react-router-dom"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Tema {
  nome: string
  modulo?: string
  to?: string
}

// Mesma divisão dos canais de estudo do Discord. O número é o módulo do KB, quando o tema já tem um.
const GRUPOS: { nome: string; temas: Tema[] }[] = [
  {
    nome: "Geral",
    temas: [
      { nome: "Reta Final", modulo: "12" },
      { nome: "Introdução ao ICM", modulo: "13" },
    ],
  },
  {
    nome: "Pré-flop",
    temas: [{ nome: "RFI 10bb CEV" }, { nome: "RFI 12bb CEV" }],
  },
  {
    nome: "Blind war",
    temas: [{ nome: "BB Raise Pot vs SB", modulo: "17" }],
  },
  {
    nome: "Flop",
    temas: [
      { nome: "C-Bet IP Short Stack", modulo: "01" },
      { nome: "C-Bet IP e 2nd Barrel" },
      { nome: "C-Bet OOP", modulo: "05" },
      { nome: "Lead no Flop e Barrel no Turn" },
      { nome: "Check-Raise Deep Stack", modulo: "07" },
      { nome: "Check-Raise Short Stack", modulo: "06" },
      { nome: "Multiway", modulo: "10" },
      {
        nome: "Bet vs Missed C-Bet",
        modulo: "15",
        to: "/teoria/bet-vs-missed",
      },
    ],
  },
  {
    nome: "Turn",
    temas: [
      { nome: "2nd Barrel IP" },
      { nome: "2nd Barrel OOP" },
      { nome: "Probe Turn", modulo: "14" },
    ],
  },
  {
    nome: "River",
    temas: [
      { nome: "Bet Check Bet", modulo: "09" },
      { nome: "3rd Barrel e vs 3rd Barrel", modulo: "04" },
      { nome: "XC no River" },
    ],
  },
  {
    nome: "3bet pot pós-flop",
    temas: [
      { nome: "3Bet Pot IP" },
      { nome: "3Bet Pot OOP no SB" },
      { nome: "3Bet Pot OOP no BB Short" },
      { nome: "3Bet Pot OOP no BB Deep" },
    ],
  },
  {
    nome: "PKO",
    temas: [{ nome: "BTN contra 1 open", modulo: "16" }],
  },
]

function Cartao({ tema }: { tema: Tema }) {
  const on = Boolean(tema.to)
  const cls = cn(
    "flex items-center gap-4 rounded-[18px] border bg-card px-5 py-4 transition-[border-color,background-color] duration-150",
    !on && "opacity-50",
    on && "hover:border-primary hover:bg-secondary"
  )
  const inner = (
    <>
      <span className="min-w-[2ch] text-muted-foreground tabular-nums">
        {tema.modulo ?? "–"}
      </span>
      <span className="flex-1 font-medium">{tema.nome}</span>
      <Badge variant={on ? "default" : "outline"}>
        {on ? "Disponível" : "Em breve"}
      </Badge>
    </>
  )
  return on ? (
    <Link to={tema.to!} className={cls}>
      {inner}
    </Link>
  ) : (
    <div className={cls}>{inner}</div>
  )
}

export default function TeoriaIndex() {
  return (
    <main>
      <PageHeader
        title="Teoria"
        lead="Escolha o tema que você quer estudar. Os grupos seguem os canais do Discord."
      />
      <div className="mx-auto grid max-w-[1080px] gap-12 px-5 pb-24">
        {GRUPOS.map((g) => (
          <section key={g.nome} aria-labelledby={`g-${g.nome}`}>
            <h2
              id={`g-${g.nome}`}
              className="mb-4 text-2xl font-bold tracking-tight"
            >
              {g.nome}
            </h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {g.temas.map((t) => (
                <li key={t.nome}>
                  <Cartao tema={t} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  )
}
