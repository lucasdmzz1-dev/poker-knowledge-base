import { Link, NavLink, Outlet } from "react-router-dom"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const LINKS = [
  { to: "/", label: "Início", end: true },
  { to: "/teoria", label: "Teoria", end: false },
  { to: "/pratica", label: "Prática", end: false },
  { to: "/analise", label: "Análise", end: false },
]

export function Layout() {
  return (
    <div className="min-h-svh">
      <header className="sticky top-3 z-20 flex justify-center px-3 pt-3">
        <div className="grid h-12 w-full max-w-[760px] grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-full border bg-card/80 py-1.5 pr-1.5 pl-4 backdrop-blur-md">
          <Link to="/" className="flex w-fit items-center gap-2.5 font-bold">
            <span className="grid size-7 place-items-center rounded-lg bg-primary text-xs text-primary-foreground">
              PK
            </span>
            <span className="max-[640px]:hidden">Poker KB</span>
          </Link>

          <nav aria-label="Áreas" className="flex gap-0.5">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  cn(
                    "rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground max-[520px]:px-2 max-[520px]:text-[13px]",
                    isActive &&
                      "bg-primary text-primary-foreground hover:text-primary-foreground"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex justify-end">
            <Popover>
              <PopoverTrigger
                aria-label="Abrir o seu perfil"
                className="grid size-9 cursor-pointer place-items-center rounded-full border bg-secondary text-sm font-bold transition-[color,border-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-primary active:scale-[0.97]"
              >
                LU
              </PopoverTrigger>
              <PopoverContent align="end" className="w-64 rounded-2xl">
                <p className="font-bold">Lucas</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Seu histórico do trainer fica salvo só neste navegador. Não
                  existe login por enquanto.
                </p>
                <div className="mt-3 grid gap-1">
                  <Link
                    to="/analise"
                    className="rounded-lg px-2 py-1.5 text-sm font-medium hover:bg-secondary"
                  >
                    Minha análise
                  </Link>
                  <Link
                    to="/teoria"
                    className="rounded-lg px-2 py-1.5 text-sm font-medium hover:bg-secondary"
                  >
                    Ver os temas
                  </Link>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  )
}
