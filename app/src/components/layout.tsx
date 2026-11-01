import { Link, NavLink, Outlet } from "react-router-dom"
import { cn } from "@/lib/utils"

const AREAS = [
  { to: "/teoria", label: "Teoria" },
  { to: "/pratica", label: "Prática" },
  { to: "/analise", label: "Análise" },
]

export function Layout() {
  return (
    <div className="min-h-svh">
      <header className="bg-background/90 sticky top-0 z-10 border-b backdrop-blur">
        <div className="mx-auto flex h-[60px] max-w-[1080px] items-center justify-between gap-4 px-5">
          <Link to="/" className="flex items-center gap-2.5 font-bold">
            <span className="bg-primary text-primary-foreground grid size-7 place-items-center rounded-lg text-xs">PK</span>
            <span className="max-[460px]:hidden">Poker KB</span>
          </Link>
          <nav aria-label="Áreas" className="flex gap-1">
            {AREAS.map((a) => (
              <NavLink
                key={a.to}
                to={a.to}
                className={({ isActive }) =>
                  cn(
                    "text-muted-foreground hover:bg-card hover:text-foreground rounded-full px-3.5 py-2 text-sm font-medium transition-colors max-[460px]:px-3",
                    isActive && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                  )
                }
              >
                {a.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <Outlet />
    </div>
  )
}
