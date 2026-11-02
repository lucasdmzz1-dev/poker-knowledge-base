import { Fragment } from "react"
import { cn } from "@/lib/utils"

// Texto com destaques. Marcação explícita nos módulos:
//   **texto**   negrito branco
//   {v|texto}   verde (positivo)
//   {r|texto}   vermelho (negativo)
//   {a|texto}   amarelo (atenção)
// O que não tem marcação ganha destaque automático para sizes, porcentagens,
// stacks e palavras de proibição, para o olho achar o importante primeiro.

const COR: Record<string, string> = {
  v: "font-bold text-primary",
  r: "font-bold text-b50",
  a: "font-bold text-amber-300",
}

const EXPLICITO = /(\*\*[^*]+\*\*|\{[vra]\|[^}]+\})/g

const AUTO = new RegExp(
  [
    "\\b(?:B\\d{2,3}(?:-B?\\d{2,3})?)\\b",
    "\\b\\d+(?:[,.]\\d+)?\\s?(?:%|bb)(?!\\w)",
    "\\b(?:UTG\\+?\\d?|LJ|HJ|CO|BTN|SB|BB)\\b",
    "\\b(?:[AKQJT][AKQJT2-9]|[2-9][AKQJT])[so]?\\b",
    "\\b([2-9])\\1[so]?\\b",
    "\\b[Aa]ll-in\\b",
    "\\b[Oo]verbet\\b",
    "\\b(?:[Nn]unca|[Jj]amais|[Ee]vite)\\b",
    "\\b[Ss]empre\\b",
  ].join("|"),
  "g"
)

function auto(texto: string) {
  const partes: React.ReactNode[] = []
  let ultimo = 0
  for (const m of texto.matchAll(AUTO)) {
    const i = m.index
    if (i > ultimo) partes.push(texto.slice(ultimo, i))
    const t = m[0]
    const baixo = t.toLowerCase()
    const cor = /^(nunca|jamais|evite)$/.test(baixo)
      ? "font-bold text-b50"
      : baixo === "sempre"
        ? "font-bold text-primary"
        : "font-bold text-foreground"
    partes.push(
      <strong key={i} className={cor}>
        {t}
      </strong>
    )
    ultimo = i + t.length
  }
  if (ultimo < texto.length) partes.push(texto.slice(ultimo))
  return partes
}

export function Rico({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  const pedacos = children.split(EXPLICITO)
  return (
    <span className={className}>
      {pedacos.map((p, i) => {
        if (p.startsWith("**") && p.endsWith("**") && p.length > 4) {
          return (
            <strong key={i} className="font-bold text-foreground">
              {p.slice(2, -2)}
            </strong>
          )
        }
        const m = p.match(/^\{([vra])\|([^}]+)\}$/)
        if (m) {
          return (
            <strong key={i} className={cn(COR[m[1]])}>
              {m[2]}
            </strong>
          )
        }
        return <Fragment key={i}>{auto(p)}</Fragment>
      })}
    </span>
  )
}

// Separa a frase de abertura do resto: "Título: detalhe" ou a primeira frase.
export function separa(texto: string): [string, string] {
  const dp = texto.indexOf(": ")
  if (dp > 8 && dp < 70) return [texto.slice(0, dp), texto.slice(dp + 2)]
  const pt = texto.search(/[.;] /)
  if (pt > 8 && pt < 110) return [texto.slice(0, pt + 1), texto.slice(pt + 2)]
  // Frase longa e sem corte: não vira título, fica toda como detalhe.
  return texto.length > 110 ? ["", texto] : [texto, ""]
}
