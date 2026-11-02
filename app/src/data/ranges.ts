// Ranges de abertura usados para sortear a mão do herói na Prática. SÃO PROVISÓRIOS:
// os módulos não trazem o range de open de cada posição, então ficam só as mãos que
// cada posição abre com folga. Troque pelos ranges do coach quando ele passar.
export const RANGE_ABERTURA = {
  EP: "77+, ATs+, KJs+, QJs, JTs, T9s, AQo+, KQo",
  HJ: "44+, A2s+, ATo+, K9s+, KJo+, QTs+, JTs, T9s, 98s, 87s",
  CO: "22+, A2s+, ATo+, K9s+, KJo+, Q9s+, QJo, J9s+, T9s, 98s, 87s, 76s, 65s",
  BTN: "22+, A2s+, A4o+, K6s+, K9o+, Q8s+, Q9o+, J8s+, J9o+, T8s+, T9o, 97s+, 86s+, 76s, 65s, 54s",
  // BTN com 20bb: o range é mais curto (sem K5o, Q7o nem Q2s).
  BTN20:
    "22+, A2s+, A9o+, K9s+, KTo+, Q9s+, QJo, J9s+, JTo, T9s, T9o, 98s, 87s, 76s",
} as const

export type PosRange = keyof typeof RANGE_ABERTURA

const ORDEM_RANKS = "AKQJT98765432"

// "77+", "A2s+", "ATo+" ou uma mão exata como "T9s" viram o conjunto de classes.
export function expandirRange(texto: string): Set<string> {
  const out = new Set<string>()
  for (const t of texto.split(",").map((x) => x.trim())) {
    const mais = t.endsWith("+")
    const base = mais ? t.slice(0, -1) : t
    const [a, b] = [base[0], base[1]]
    const tipo = base[2] ?? ""
    if (a === b) {
      const i = ORDEM_RANKS.indexOf(a)
      for (let k = mais ? 0 : i; k <= i; k++)
        out.add(ORDEM_RANKS[k] + ORDEM_RANKS[k])
    } else {
      const ia = ORDEM_RANKS.indexOf(a)
      const ib = ORDEM_RANKS.indexOf(b)
      for (let k = mais ? ia + 1 : ib; k <= ib; k++)
        out.add(a + ORDEM_RANKS[k] + tipo)
    }
  }
  return out
}

// A mão ("AhKd") como classe do range ("AKo").
export function classeDaMao(m: readonly [string, string]): string {
  const [a, b] = m
  const [r1, r2] = [a[0], b[0]].sort(
    (x, y) => ORDEM_RANKS.indexOf(x) - ORDEM_RANKS.indexOf(y)
  )
  if (r1 === r2) return r1 + r2
  return r1 + r2 + (a[1] === b[1] ? "s" : "o")
}

const cache = new Map<string, Set<string>>()

export function abre(range: string, m: readonly [string, string]): boolean {
  let set = cache.get(range)
  if (!set) {
    set = expandirRange(range)
    cache.set(range, set)
  }
  return set.has(classeDaMao(m))
}
