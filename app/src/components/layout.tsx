import { Link, NavLink, Outlet } from "react-router-dom"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useUsuario } from "@/lib/usuario"
import { cn } from "@/lib/utils"

const LINKS = [
  { to: "/", label: "Início", end: true },
  { to: "/teoria", label: "Teoria", end: false },
  { to: "/pratica", label: "Prática", end: false },
  { to: "/analise", label: "Análise", end: false },
]

export function Layout() {
  const usuario = useUsuario()
  const nome = usuario?.email ?? "Você"
  const iniciais = usuario ? usuario.email.slice(0, 2).toUpperCase() : "VC"
  return (
    <div className="min-h-svh">
      <header className="sticky top-3 z-20 flex justify-center px-3 pt-3">
        <div className="relative isolate grid h-12 w-full max-w-[760px] grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] py-1.5 pr-1.5 pl-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.28),inset_0_-1px_0_rgba(255,255,255,0.06),0_10px_36px_rgba(0,0,0,0.5)] backdrop-blur-xl backdrop-saturate-[1.8]">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-b from-white/[0.14] via-transparent to-white/[0.04]"
          />
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
                    "rounded-full border border-transparent px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground max-[520px]:px-2 max-[520px]:text-[13px]",
                    isActive &&
                      "border border-primary/40 bg-primary/25 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_0_18px_rgba(143,240,168,0.28)] backdrop-blur-md hover:text-primary"
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
                className="grid size-9 cursor-pointer place-items-center rounded-full border border-white/20 bg-white/10 text-sm font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] backdrop-blur-md transition-[color,border-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-primary active:scale-[0.97]"
              >
                {iniciais}
              </PopoverTrigger>
              <PopoverContent align="end" className="w-64 rounded-2xl">
                <p className="font-bold break-all">{nome}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {usuario
                    ? "Seus dados ficam salvos na sua conta, em qualquer aparelho."
                    : "Seu histórico do trainer fica salvo só neste navegador."}
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
                  {usuario && (
                    <button
                      type="button"
                      onClick={usuario.sair}
                      className="cursor-pointer rounded-lg px-2 py-1.5 text-left text-sm font-medium hover:bg-secondary"
                    >
                      Sair
                    </button>
                  )}
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
