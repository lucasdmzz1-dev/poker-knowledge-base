import type { ReactNode } from "react"
import { Check, X } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Padrão de resposta de todos os temas da Prática: o botão certo ganha contorno
// verde e selo de check, o errado escolhido ganha contorno vermelho e selo de X,
// e o card do resultado repete a cor do acerto ou do erro.
export type EstadoResposta = "livre" | "certa" | "errada" | "apagada"

export function estadoDe(
  a: string,
  resp: string | null,
  certa: string
): EstadoResposta {
  if (resp === null) return "livre"
  if (a === certa) return "certa"
  if (a === resp) return "errada"
  return "apagada"
}

export function BotaoResposta({
  rotulo,
  sub,
  tecla,
  cor,
  estado,
  onClick,
}: {
  rotulo: string
  sub: string
  tecla: string
  cor: string
  estado: EstadoResposta
  onClick: () => void
}) {
  return (
    <button
      type="button"
      disabled={estado !== "livre"}
      onClick={onClick}
      className={cn(
        "relative grid min-h-16 content-center gap-0.5 rounded-lg px-1.5 py-3 text-sm font-bold text-white transition-[transform,background-color,opacity] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] enabled:cursor-pointer enabled:active:scale-[0.97] md:text-base",
        cor,
        estado === "apagada" && "opacity-40",
        estado === "certa" &&
          "shadow-[0_0_28px_color-mix(in_srgb,var(--primary)_55%,transparent)] outline-4 outline-offset-2 outline-primary",
        estado === "errada" &&
          "shadow-[0_0_28px_color-mix(in_srgb,var(--destructive)_55%,transparent)] outline-4 outline-offset-2 outline-destructive"
      )}
    >
      {(estado === "certa" || estado === "errada") && (
        <span
          aria-hidden="true"
          className={cn(
            "absolute -top-3 -right-2 grid size-7 place-items-center rounded-full",
            estado === "certa"
              ? "bg-primary text-primary-foreground"
              : "bg-destructive text-white"
          )}
        >
          {estado === "certa" ? (
            <Check className="size-4" strokeWidth={3} />
          ) : (
            <X className="size-4" strokeWidth={3} />
          )}
        </span>
      )}
      {rotulo}
      <small className="text-xs font-normal opacity-80">
        {sub ? `${sub} · tecla ${tecla}` : `tecla ${tecla}`}
      </small>
    </button>
  )
}

export function CartaoResultado({
  ok,
  children,
}: {
  ok: boolean
  children: ReactNode
}) {
  return (
    <Card
      className={cn(
        "mt-5 rounded-2xl border-2 p-5",
        ok
          ? "border-primary shadow-[0_0_32px_color-mix(in_srgb,var(--primary)_30%,transparent)]"
          : "border-destructive shadow-[0_0_32px_color-mix(in_srgb,var(--destructive)_30%,transparent)]"
      )}
    >
      <h3
        className={cn(
          "text-center text-4xl font-extrabold tracking-tight",
          ok ? "text-primary" : "text-destructive"
        )}
      >
        {ok ? "CERTO" : "ERRADO"}
      </h3>
      {children}
    </Card>
  )
}
