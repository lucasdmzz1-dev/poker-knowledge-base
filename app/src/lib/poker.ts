export function rng(): number {
  const a = new Uint32Array(1)
  window.crypto.getRandomValues(a)
  return (a[0] % 100) + 1
}

export function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = rng() % (i + 1)
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export interface ItemSessao {
  sid: string
  tipo: string
  bucket: number
  rng: number
  resp: string
  esperado: string
  ok: boolean
}

export interface Sessao {
  id: number
  modulo: string
  total: number
  acertos: number
  itens: ItemSessao[]
  levar: boolean
}

export interface Ultimo {
  to: string
  label: string
}
