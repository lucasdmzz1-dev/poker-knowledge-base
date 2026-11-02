export type AcaoCbet = "Check" | "B25" | "B40"
export type BoardCbet = "ahigh" | "broadway" | "highcard" | "low"

export const BOARD_CBET: Record<
  BoardCbet,
  { nome: string; freq: string; board: string[]; estrategia: string }
> = {
  ahigh: {
    nome: "A high",
    freq: "100%",
    board: ["Ad", "8c", "4s"],
    estrategia: "Bet range: o range inteiro aposta B25.",
  },
  broadway: {
    nome: "Broadway",
    freq: "84%",
    board: ["Ks", "Td", "6c"],
    estrategia: "C-bet em frequência muito alta, em B25.",
  },
  highcard: {
    nome: "High card conectado",
    freq: "52%",
    board: ["Js", "8d", "4s"],
    estrategia: "Split: parte do range aposta B40 e a parte média dá check.",
  },
  low: {
    nome: "Low",
    freq: "55%",
    board: ["9s", "8d", "5c"],
    estrategia: "Split: parte do range aposta B40 e a parte média dá check.",
  },
}

export interface SituacaoCbet {
  id: string
  tipo: BoardCbet
  hero: [string, string]
  certa: AcaoCbet
  classe: string
  porque: string
}

// Cada mão vem de um grupo que o módulo 01 cita: bet range nos boards com vantagem,
// e nos boards de split as mãos que apostam (draws da parte off e blockers do flush)
// contra as que dão check (second pair, third pair e trincas).
export const situacoesCbet: SituacaoCbet[] = [
  {
    id: "a-ak",
    tipo: "ahigh",
    hero: ["Ah", "Kd"],
    certa: "B25",
    classe: "Top pair",
    porque: "No A high o range inteiro aposta B25.",
  },
  {
    id: "a-broca",
    tipo: "ahigh",
    hero: ["7c", "6c"],
    certa: "B25",
    classe: "Draw fraco",
    porque: "No A high até as brocas apostam: é bet range, em B25.",
  },
  {
    id: "a-set",
    tipo: "ahigh",
    hero: ["8h", "8s"],
    certa: "B25",
    classe: "Trinca",
    porque: "No A high o range inteiro aposta B25, trinca inclusive.",
  },
  {
    id: "a-over",
    tipo: "ahigh",
    hero: ["Qc", "Jh"],
    certa: "B25",
    classe: "Overcards",
    porque: "A vantagem de nuts e de equity manda apostar tudo em B25.",
  },
  {
    id: "b-tp",
    tipo: "broadway",
    hero: ["Kh", "Qd"],
    certa: "B25",
    classe: "Top pair",
    porque: "No broadway a frequência é muito alta, e o size é o B25.",
  },
  {
    id: "b-draw",
    tipo: "broadway",
    hero: ["Jh", "Qh"],
    certa: "B25",
    classe: "Duas pontas",
    porque: "Com vantagem de equity e de nuts o draw aposta B25.",
  },
  {
    id: "h-blocker",
    tipo: "highcard",
    hero: ["As", "3d"],
    certa: "B40",
    classe: "Blocker do flush draw",
    porque:
      "Mão que bloqueia o flush draw aposta no split e reduz o check-raise do vilão. O size do split é B40.",
  },
  {
    id: "h-off",
    tipo: "highcard",
    hero: ["Th", "9h"],
    certa: "B40",
    classe: "Draw da parte off",
    porque: "Draws da parte off apostam no split, em B40.",
  },
  {
    id: "h-sp",
    tipo: "highcard",
    hero: ["Kc", "8c"],
    certa: "Check",
    classe: "Second pair",
    porque:
      "Second pair é parte média do range e dá check para realizar equity.",
  },
  {
    id: "h-tp3",
    tipo: "highcard",
    hero: ["Qh", "4h"],
    certa: "Check",
    classe: "Third pair",
    porque: "Third pair dá check no split.",
  },
  {
    id: "h-set",
    tipo: "highcard",
    hero: ["Jh", "Jd"],
    certa: "Check",
    classe: "Trinca",
    porque: "Algumas trincas entram no check como trap e protegem o range.",
  },
  {
    id: "l-off",
    tipo: "low",
    hero: ["Jh", "Tc"],
    certa: "B40",
    classe: "Draw da parte off",
    porque: "Draws da parte off apostam no split, em B40.",
  },
  {
    id: "l-off2",
    tipo: "low",
    hero: ["Th", "7c"],
    certa: "B40",
    classe: "Duas pontas",
    porque: "Draw da parte off aposta no split, em B40.",
  },
  {
    id: "l-sp",
    tipo: "low",
    hero: ["Ah", "8h"],
    certa: "Check",
    classe: "Second pair",
    porque: "Second pair é parte média do range e dá check.",
  },
  {
    id: "l-tp3",
    tipo: "low",
    hero: ["Kh", "5h"],
    certa: "Check",
    classe: "Third pair",
    porque: "Third pair dá check para realizar equity.",
  },
  {
    id: "l-set",
    tipo: "low",
    hero: ["5h", "5d"],
    certa: "Check",
    classe: "Trinca",
    porque: "Algumas trincas dão check como trap e protegem o range.",
  },
]
