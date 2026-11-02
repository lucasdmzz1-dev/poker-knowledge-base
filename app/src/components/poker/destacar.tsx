import type { ReactNode } from "react"

// Põe em negrito os percentuais ("50%") e os sizes ("B70") de um texto de explicação.
export function destacar(texto: string): ReactNode {
  return texto.split(/(\d+(?:[.,]\d+)?%|\bB\d{2,3}\b)/).map((parte, k) =>
    /^(\d+(?:[.,]\d+)?%|B\d{2,3})$/.test(parte) ? (
      <strong key={k} className="text-foreground">
        {parte}
      </strong>
    ) : (
      parte
    )
  )
}
