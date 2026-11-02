import type { CardCode } from "@/data/mod15"

// Cores das etiquetas de size e dos nomes de ação. Cada módulo escolhe a sua.
export type CorEtiqueta = "claro" | "vermelho" | "verde" | "branco" | "amarelo"
export type CorAcao = "verde" | "branco" | "vermelho" | "amarelo"

export interface Etiq {
  texto: string
  cor: CorEtiqueta
}

// Um tipo de mão: duas cartas e o nome embaixo.
export interface MaoEx {
  nome: string
  cartas: CardCode[]
}

// Faixa de frequência (barra). Com `maos` mostra as cartas; sem, mostra o texto.
export interface FaixaT {
  p: number
  texto: string
  maos?: MaoEx[]
}

// Ação (bet, check-call, check-raise...). Com `maos` mostra as cartas; sem, o texto.
export interface AcaoT {
  nome: string
  cor: CorAcao
  texto?: string
  maos?: MaoEx[]
}

// Board de exemplo: flop e, se houver, turn e river.
export interface BoardT {
  cartas: CardCode[]
  turn?: CardCode
  river?: CardCode
  rotulo?: string
}

// Item de lista com mãos de exemplo embaixo do texto.
export interface ItemListaT {
  texto: string
  maos?: MaoEx[]
}

// Assento da mesa no formato do replayer.
export interface AssentoT {
  pos: string
  // Nome mostrado no assento, quando difere da posição (EP no lugar de UTG1).
  nome?: string
  stack: number
  acao?: string
  heroi?: boolean
  fora?: boolean
}

export interface MesaT {
  assentos: AssentoT[]
  board: CardCode[]
  heroi?: CardCode[]
  pote: number
  legenda?: string
}

// Um board com as suas faixas ou ações. Sem `cartas`, a aba não tem board.
// Com `mesa`, mostra a mesa do replayer no lugar do board.
export interface BlocoT {
  grupo?: string
  mesa?: MesaT
  rotulo?: string
  cartas?: CardCode[]
  turn?: CardCode
  etiqueta?: Etiq
  faixas?: FaixaT[]
  acoes?: AcaoT[]
}

export interface AbaT {
  id: string
  nome: string
  criterio: string
  blocos: BlocoT[]
  nota?: string
}

export interface CartaoT {
  etiqueta?: Etiq
  titulo: string
  texto?: string
  textos?: string[]
  cartas?: CardCode[]
  turn?: CardCode
  maos?: MaoEx[]
}

export interface BoardRefT {
  cartas: CardCode[]
  etiqueta?: Etiq
  nome: string
  nota?: string
}

export type SecaoT =
  | {
      tipo: "lista"
      titulo: string
      intro?: string
      itens: (string | ItemListaT)[]
      board?: BoardT
      // negativo para erros, positivo para regras; sem tom, itens numerados.
      tom?: "neutro" | "negativo" | "positivo"
    }
  | {
      tipo: "cartoes"
      titulo: string
      intro?: string
      colunas?: 2 | 3
      itens: CartaoT[]
    }
  | { tipo: "abas"; titulo: string; intro?: string; abas: AbaT[] }
  | { tipo: "boards"; titulo: string; intro?: string; itens: BoardRefT[] }
  | { tipo: "rng"; titulo: string; intro?: string; nota?: string }
  | { tipo: "icm-ranges"; titulo: string; intro?: string }
  | { tipo: "icm-ranges"; titulo: string; intro?: string }

export interface ModuloTeoria {
  // Parte final da rota: /teoria/<slug>
  slug: string
  // Nome do tema no índice da Teoria (precisa ser igual ao nome do cartão).
  // Quando o módulo cobre mais de um cartão do índice, use uma lista.
  tema: string | string[]
  nome: string
  spot: string
  tags: string[]
  // Aulas do YouTube (id do vídeo), quando houver.
  videos?: { id: string; nome?: string }[]
  secoes: SecaoT[]
}
