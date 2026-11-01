import { Link } from "react-router-dom"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const TEMAS: [string, string][] = [
  ["01", "C-Bet IP Short Stack"],
  ["02", "C-Bet IP 40bb"],
  ["03", "Second Barrel IP"],
  ["04", "Third Barrel e vs Third Barrel"],
  ["05", "C-Bet OOP 40bb"],
  ["06", "Check-Raise Short Stack"],
  ["07", "Check-Raise Deep Stack"],
  ["08", "3Bet Pot"],
  ["09", "Bet Check Bet"],
  ["10", "Multiway Pot"],
  ["11", "Value Bet Masterclass"],
  ["12", "Reta Final"],
  ["13", "ICM e Risk Premium"],
  ["14", "Probe Turn"],
  ["15", "Bet vs Missed C-Bet"],
  ["16", "PKO · BTN vs 1 open"],
  ["17", "BB Raised Pot vs SB Limp"],
]

export default function TeoriaIndex() {
  return (
    <main>
      <PageHeader title="Teoria" lead="Escolha o tema que você quer estudar." />
      <ul className="mx-auto grid max-w-[1080px] gap-3 px-5 pb-20 md:grid-cols-2">
        {TEMAS.map(([n, nome]) => {
          const on = n === "15"
          const inner = (
            <>
              <span className="min-w-[2ch] text-muted-foreground tabular-nums">
                {n}
              </span>
              <span className="flex-1 font-medium">{nome}</span>
              <Badge variant={on ? "default" : "outline"}>
                {on ? "Disponível" : "Em breve"}
              </Badge>
            </>
          )
          const cls = cn(
            "flex items-center gap-4 rounded-[18px] border bg-card px-5 py-5",
            !on && "opacity-50"
          )
          return (
            <li key={n}>
              {on ? (
                <Link
                  to="/teoria/bet-vs-missed"
                  className={cn(cls, "hover:border-primary hover:bg-secondary")}
                >
                  {inner}
                </Link>
              ) : (
                <div className={cls}>{inner}</div>
              )}
            </li>
          )
        })}
      </ul>
    </main>
  )
}
