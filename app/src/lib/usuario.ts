import { createContext, useContext } from "react"

export interface Usuario {
  email: string
  sair: () => void
}

// Fica nulo quando o site roda sem conta (modo local).
export const UsuarioContext = createContext<Usuario | null>(null)

export function useUsuario(): Usuario | null {
  return useContext(UsuarioContext)
}
