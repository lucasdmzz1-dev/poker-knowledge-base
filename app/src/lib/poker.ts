// Inteiro uniforme em [0, n), sem viés de módulo (amostragem por rejeição).
export function randomInt(n: number): number {
  const limite = Math.floor(0x100000000 / n) * n
  const a = new Uint32Array(1)
  do {
    window.crypto.getRandomValues(a)
  } while (a[0] >= limite)
  return a[0] % n
}

// O número do RNG que o trainer mostra: de 1 a 100.
export function rng(): number {
  return randomInt(100) + 1
}

export function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = randomInt(i + 1)
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
  // Detalhes da questão, para a lista "Ver erros" (sessões antigas não têm).
  board?: string[]
  hero?: string[]
  classe?: string
  porque?: string
  nota?: string
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
  verbo?: string
}
