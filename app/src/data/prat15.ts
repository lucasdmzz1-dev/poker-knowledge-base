// Mais questões do Bet vs Missed (módulo 15). Cada mão vem de um board do módulo e
// recebe o bucket pelas tabelas do guideline (12-Padroes). O herói é o BTN que pagou
// o open do CO ou do HJ, então só entram mãos que ele paga (ranges.ts). Mão que as
// tabelas não resolvem de forma clara devolve null e não entra no treino.
import { ler } from "@/data/prat05"
import { classeDaMao, btnPaga, classesQueOBTNPaga } from "@/data/ranges"
import type { Situacao, TipoId } from "@/data/mod15"

const R = "23456789TJQKA"
const rk = (c: string) => R.indexOf(c[0]) + 2

// Boards do módulo (refBoards) em que o treino ainda não tinha questões geradas.
const BOARDS: { tipo: TipoId; board: string[] }[] = [
  { tipo: "conectado", board: ["As", "Kh", "Td"] },
  { tipo: "conectado", board: ["Qs", "Jh", "Td"] },
  { tipo: "semi", board: ["Ad", "Kh", "2c"] },
  { tipo: "semi", board: ["Js", "9h", "6c"] },
  { tipo: "semi", board: ["9d", "6h", "2c"] },
  { tipo: "semi", board: ["7s", "6h", "5c"] },
  { tipo: "seco", board: ["Qs", "5h", "3c"] },
  { tipo: "seco", board: ["Kd", "7h", "4c"] },
  { tipo: "seco", board: ["Td", "6h", "2c"] },
  { tipo: "monotone", board: ["As", "9s", "8s"] },
]

const NOME_TIPO: Record<string, string> = {
  conectado: "conectado high",
  semi: "semi conectado",
  seco: "seco",
  monotone: "monotone",
}

function janelas(): number[][] {
  const out: number[][] = []
  for (let s = 1; s <= 10; s++) out.push([s, s + 1, s + 2, s + 3, s + 4])
  return out
}

// Backdoor de sequência: três cartas dentro de uma janela de cinco, com ao menos uma
// carta da mão, sem ser um draw direto.
function temBDSD(board: string[], hero: string[], jaTemDraw: boolean): boolean {
  if (jaTemDraw) return false
  const todas = [...board, ...hero].map(rk)
  const heroR = hero.map(rk)
  const comoBaixo = (x: number) => (x === 14 ? [14, 1] : [x])
  const set = new Set(todas.flatMap(comoBaixo))
  return janelas().some((j) => {
    const dentro = j.filter((x) => set.has(x)).length
    const heroDentro = heroR.some((h) =>
      comoBaixo(h).some((x) => j.includes(x))
    )
    return dentro >= 3 && heroDentro
  })
}

// Força do top pair relativa ao range que chega: forte são os dois melhores kickers,
// fraco são os piores, o resto é médio.
function forcaDoTopPair(
  board: string[],
  hero: string[]
): "forte" | "medio" | "fraco" {
  const topo = Math.max(...board.map(rk))
  const kickers = new Set<number>()
  for (const classe of classesQueOBTNPaga()) {
    const [a, b] = [classe[0], classe[1]]
    if (classe.length === 2) continue
    const ra = R.indexOf(a) + 2
    const rb = R.indexOf(b) + 2
    const outro = ra === topo ? rb : rb === topo ? ra : 0
    if (outro && !board.map(rk).includes(outro)) kickers.add(outro)
  }
  const lista = [...kickers].sort((x, y) => y - x)
  const meu = hero.map(rk).find((x) => x !== topo) ?? 0
  const i = lista.indexOf(meu)
  if (i < 0) return "medio"
  if (i < 2) return "forte"
  if (i >= lista.length - 2) return "fraco"
  return "medio"
}

interface Resultado {
  bucket: number
  classe: string
}

export function bucketDe(
  tipo: TipoId,
  board: string[],
  hero: [string, string]
): Resultado | null {
  const L = ler(board, hero)
  const naipes = board.map((c) => c[1])
  const monotone = naipes.every((n) => n === naipes[0])
  const nDoNaipe = monotone ? hero.filter((c) => c[1] === naipes[0]).length : 0
  const drawDireto = L.oesd || L.gutshot || L.flushDraw
  const bdsd = temBDSD(board, hero, drawDireto)
  const topPair = L.feita === "topPair"
  const forca = topPair ? forcaDoTopPair(board, hero) : null

  // Par com duas pontas ou flush draw (e, no monotone, com backdoor de sequência) é um
  // combo que as tabelas não resolvem.
  const comPar = ["topPair", "secondPair", "thirdPair", "underpair"].includes(
    L.feita
  )
  if (comPar && (L.oesd || L.flushDraw || (monotone && bdsd))) return null

  if (tipo === "monotone") {
    // 75%: trinca e BDSD. 50%: flush, dois pares, top pair, flush draw, duas
    // pontas e gutshot. 25%: todo o restante.
    if (nDoNaipe === 2) return { bucket: 50, classe: "Flush" }
    if (["setAlto", "setMeio", "setBaixo"].includes(L.feita))
      return { bucket: 75, classe: "Trinca" }
    if (L.feita === "doisPares") return { bucket: 50, classe: "Dois pares" }
    if (topPair) return { bucket: 50, classe: "Top pair" }
    if (nDoNaipe === 1 && L.feita === "nada")
      return { bucket: 50, classe: "Flush draw" }
    if (L.feita === "nada" && L.oesd)
      return { bucket: 50, classe: "Duas pontas" }
    if (L.feita === "nada" && L.gutshot)
      return { bucket: 50, classe: "Gutshot" }
    if (L.feita === "nada" && bdsd) return { bucket: 75, classe: "BDSD" }
    if (
      ["secondPair", "thirdPair", "underpair"].includes(L.feita) &&
      nDoNaipe === 0 &&
      !drawDireto
    )
      return {
        bucket: 25,
        classe:
          L.feita === "secondPair"
            ? "Segundo par"
            : L.feita === "thirdPair"
              ? "Terceiro par"
              : "Underpair",
      }
    return null
  }

  // Boards sem flush draw dos naipes: as mãos suited sem draw seguem a mesma regra.
  if (tipo === "seco") {
    if (L.feita === "overpair") return { bucket: 100, classe: "Overpair" }
    if (L.feita === "setBaixo" || L.feita === "setMeio")
      return { bucket: 100, classe: "Trinca (menos a top trinca)" }
    if (L.feita === "setAlto") return { bucket: 75, classe: "Top trinca" }
    if (L.feita === "doisPares") return { bucket: 75, classe: "Dois pares" }
    if (topPair) return { bucket: 75, classe: "Top pair" }
    if (L.feita === "sequencia" || L.feita === "flush") return null
    const nome: Record<string, string> = {
      secondPair: "Segundo par",
      thirdPair: "Terceiro par",
      underpair: "Underpair",
      nada: L.oesd
        ? "Duas pontas"
        : L.gutshot
          ? "Gutshot"
          : bdsd || L.bdfd
            ? "Backdoor"
            : "Air",
    }
    return { bucket: 50, classe: nome[L.feita] ?? "Todo o restante" }
  }

  if (tipo === "conectado") {
    if (L.feita === "sequencia") return { bucket: 75, classe: "Sequência" }
    if (["setAlto", "setMeio", "setBaixo"].includes(L.feita))
      return { bucket: 50, classe: "Trinca" }
    if (L.feita === "doisPares") return { bucket: 50, classe: "Dois pares" }
    if (topPair) {
      if (forca === "forte") return { bucket: 50, classe: "Top pair forte" }
      return {
        bucket: 25,
        classe: forca === "fraco" ? "Top pair fraco" : "Top pair médio",
      }
    }
    if (L.feita === "nada" && L.oesd)
      return { bucket: 50, classe: "Duas pontas" }
    if (L.feita === "nada" && L.gutshot)
      return { bucket: 25, classe: "Gutshot" }
    if (L.feita === "secondPair") return { bucket: 25, classe: "Segundo par" }
    if (L.feita === "thirdPair") return { bucket: 25, classe: "Terceiro par" }
    if (L.feita === "underpair") return { bucket: 25, classe: "Underpair" }
    if (L.feita === "nada" && !drawDireto && !L.bdfd && !bdsd)
      return { bucket: 25, classe: "Air" }
    return null
  }

  // semi conectado
  if (L.feita === "setBaixo") return { bucket: 100, classe: "Pior trinca" }
  if (L.feita === "overpair") return { bucket: 100, classe: "Overpair" }
  if (L.feita === "doisPares") {
    const topo = board.map(rk).sort((a, b) => b - a)
    const meus = hero.map(rk).sort((a, b) => b - a)
    const topTwo = meus[0] === topo[0] && meus[1] === topo[1]
    return topTwo
      ? { bucket: 100, classe: "Top two pair" }
      : { bucket: 75, classe: "Dois pares" }
  }
  if (L.feita === "sequencia") return { bucket: 75, classe: "Sequência" }
  if (topPair) {
    if (forca === "forte") return { bucket: 75, classe: "Top pair forte" }
    if (forca === "fraco") return { bucket: 25, classe: "Top pair fraco" }
    return { bucket: 50, classe: "Top pair médio" }
  }
  if (L.feita === "underpair") return { bucket: 50, classe: "Underpair" }
  if (L.feita === "nada" && L.oesd) return { bucket: 50, classe: "Duas pontas" }
  if (L.feita === "nada" && L.gutshot) return { bucket: 50, classe: "Gutshot" }
  if (L.feita === "secondPair") return { bucket: 25, classe: "Segundo par" }
  if (L.feita === "thirdPair") return { bucket: 25, classe: "Terceiro par" }
  if (L.feita === "nada" && !drawDireto && !L.bdfd && !bdsd)
    return { bucket: 25, classe: "Air" }
  return null
}

// ---------- geração ----------

function todasAsMaos(): [string, string][] {
  const baralho: string[] = []
  for (const r of "AKQJT98765432") for (const s of "shdc") baralho.push(r + s)
  const out: [string, string][] = []
  for (let i = 0; i < baralho.length; i++)
    for (let j = i + 1; j < baralho.length; j++)
      out.push([baralho[i], baralho[j]])
  return out
}

function semente(texto: string): () => number {
  let h = 2166136261
  for (const ch of texto) h = Math.imul(h ^ ch.charCodeAt(0), 16777619)
  return () => {
    h ^= h << 13
    h ^= h >>> 17
    h ^= h << 5
    return (h >>> 0) / 4294967296
  }
}

function gerar(): Situacao[] {
  const maos = todasAsMaos()
  const lista: Situacao[] = []
  for (const { tipo, board } of BOARDS) {
    const grupos = new Map<string, Situacao[]>()
    for (const m of maos) {
      if (m.some((c) => board.includes(c))) continue
      if (!btnPaga("CO", m) || !btnPaga("HJ", m)) continue
      const r = bucketDe(tipo, board, m)
      if (!r) continue
      const chave = `${r.classe}|${r.bucket}`
      const sit: Situacao = {
        id: `g15-${tipo}-${board.join("")}-${m[0]}${m[1]}`,
        tipo,
        board,
        hero: [...m],
        classe: r.classe,
        bucket: r.bucket,
        porque: `${r.classe} vai em ${r.bucket}% no ${NOME_TIPO[tipo]}. (${classeDaMao(m)})`,
      }
      const g = grupos.get(chave) ?? []
      g.push(sit)
      grupos.set(chave, g)
    }
    for (const [chave, g] of grupos) {
      const rnd = semente(board.join("") + chave)
      const copia = g.slice()
      for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(rnd() * (i + 1))
        ;[copia[i], copia[j]] = [copia[j], copia[i]]
      }
      lista.push(...copia.slice(0, 2))
    }
  }
  return lista
}

export const situacoesMaisBvM: Situacao[] = gerar()
