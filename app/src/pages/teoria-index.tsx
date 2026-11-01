import { Link } from "react-router-dom"
import { PageHeader } from "@/components/page-header"
import { cn } from "@/lib/utils"

interface Tema {
  nome: string
  to?: string
}

// Mesma divisão dos canais de estudo do Discord.
const GRUPOS: { nome: string; temas: Tema[] }[] = [
  {
    nome: "Geral",
    temas: [{ nome: "Reta final" }, { nome: "Introdução ao ICM" }],
  },
  {
    nome: "Pré-flop",
    temas: [{ nome: "RFI 10bb CEV" }, { nome: "RFI 12bb CEV" }],
  },
  {
    nome: "Blind war",
    temas: [{ nome: "BB raise pot vs SB" }],
  },
  {
    nome: "Flop",
    temas: [
      { nome: "C-bet IP short stack" },
      { nome: "C-bet IP e 2nd barrel" },
      { nome: "C-bet OOP" },
      { nome: "Lead no flop e barrel no turn" },
      { nome: "Check-raise deep stack" },
      { nome: "Check-raise short stack" },
      { nome: "Multiway" },
      { nome: "Bet vs missed c-bet", to: "/teoria/bet-vs-missed" },
    ],
  },
  {
    nome: "Turn",
    temas: [
      { nome: "2nd barrel IP" },
      { nome: "2nd barrel OOP" },
      { nome: "Probe turn" },
    ],
  },
  {
    nome: "River",
    temas: [
      { nome: "Bet check bet" },
      { nome: "3rd barrel e vs 3rd barrel" },
      { nome: "XC no river" },
    ],
  },
  {
    nome: "3bet pot pós-flop",
    temas: [
      { nome: "3bet pot IP" },
      { nome: "3bet pot OOP no SB" },
      { nome: "3bet pot OOP no BB short" },
      { nome: "3bet pot OOP no BB deep" },
    ],
  },
  {
    nome: "PKO",
    temas: [{ nome: "BTN contra 1 open" }],
  },
]

const CHIP =
  "inline-flex h-11 items-center rounded-full border px-5 text-sm font-medium tracking-wide whitespace-nowrap uppercase transition-[border-color,background-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"

function Chip({ tema }: { tema: Tema }) {
  if (tema.to) {
    return (
      <Link
        to={tema.to}
        className={cn(
          CHIP,
          "border-primary bg-primary text-primary-foreground active:scale-[0.97]"
        )}
      >
        {tema.nome}
      </Link>
    )
  }
  return (
    <span
      className={cn(
        CHIP,
        "border-border bg-card text-muted-foreground opacity-60"
      )}
      title="Em breve"
    >
      {tema.nome}
    </span>
  )
}

export default function TeoriaIndex() {
  return (
    <main>
      <PageHeader
        title="Teoria"
        lead="Escolha o tema que você quer estudar. O que está em verde já está disponível."
      />
      <div className="mx-auto grid max-w-[920px] gap-14 px-5 pb-28">
        {GRUPOS.map((g) => (
          <section
            key={g.nome}
            aria-labelledby={`g-${g.nome}`}
            className="text-center"
          >
            <h2
              id={`g-${g.nome}`}
              className="mb-5 text-[clamp(1.5rem,3vw,2.2rem)] leading-tight font-bold tracking-tight uppercase"
            >
              {g.nome}
            </h2>
            <ul className="flex flex-wrap justify-center gap-2.5">
              {g.temas.map((t) => (
                <li key={t.nome}>
                  <Chip tema={t} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  )
}
