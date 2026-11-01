import { Link } from "react-router-dom"
import { KEYS, readJSON } from "@/lib/storage"
import type { Ultimo } from "@/lib/poker"

const PORTAS = [
  { to: "/teoria", nome: "Teoria" },
  { to: "/pratica", nome: "Prática" },
  { to: "/analise", nome: "Análise" },
]

export default function Home() {
  const last = readJSON<Ultimo>(KEYS.last, { to: "/teoria/bet-vs-missed", label: "Bet vs Missed C-Bet · Teoria" })
  return (
    <main className="mx-auto flex min-h-[calc(100svh-61px)] max-w-[1080px] flex-col justify-center px-5 py-12">
      <h1 className="mb-10 text-center text-[clamp(2rem,5vw,3.2rem)] leading-tight font-bold tracking-tight">
        O que você quer fazer hoje?
      </h1>
      <div className="grid gap-4 md:grid-cols-3">
        {PORTAS.map((p) => (
          <Link
            key={p.to}
            to={p.to}
            className="group bg-card hover:border-primary hover:bg-secondary focus-visible:border-primary relative flex min-h-32 items-end justify-between overflow-hidden rounded-[20px] border p-7 transition-all hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:min-h-60"
          >
            <span className="bg-primary absolute inset-x-7 top-0 h-[3px] origin-left scale-x-0 transition-transform group-hover:scale-x-100 group-focus-visible:scale-x-100" />
            <span className="text-[clamp(1.8rem,3.4vw,2.6rem)] font-bold tracking-tight">{p.nome}</span>
            <span aria-hidden="true" className="text-primary text-3xl leading-none">
              ›
            </span>
          </Link>
        ))}
      </div>
      <p className="mt-8 text-center">
        <Link
          to={last.to}
          className="text-muted-foreground hover:text-foreground hover:border-primary inline-block rounded-full border px-5 py-2.5"
        >
          Continuar: {last.label} ›
        </Link>
      </p>
    </main>
  )
}
