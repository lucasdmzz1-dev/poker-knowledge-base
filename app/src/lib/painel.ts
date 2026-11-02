import { novoId, rotuloMes, type Leak } from "@/lib/analise"
import { readJSON, writeJSON } from "@/lib/storage"

export type Escopo = "semana" | "mes"
export type Grupo = "Pré-flop" | "Pós-flop e resultado"

export interface Metrica {
  id: string
  escopo: Escopo
  grupo: Grupo
  nome: string
  lo: number
  hi: number
  nota: string
  meta?: string // meta do período atual, no texto do painel antigo
  fonte?: string
}

export interface Periodo {
  id: string
  data: string // "26/10" na semana, "09/2026" no mês
  maos: number | null
  fechado: boolean
  valores: Record<string, number | null>
}

// Um ciclo é o conjunto de métricas semanais de um mês com as semanas dele.
// Ao encerrar, o ciclo vai para o arquivo e continua guardado para consulta.
export interface Ciclo {
  id: string
  rotulo: string // "Semanas 06/10 a 26/10"
  origem?: string // mês dos leaks que originaram as métricas
  encerradoEm: string // "01/11/2026"
  metricas: Metrica[]
  periodos: Periodo[]
}

export interface DadosPainel {
  semana: Periodo[]
  mes: Periodo[]
  // Métricas semanais do ciclo atual. Sem isso, vale a lista inicial (SEMANAIS).
  metricasSemana?: Metrica[]
  origemSemana?: string
  ciclos?: Ciclo[]
}

export const CHAVE_PAINEL = "pkb:painel2"

const I = Infinity
const PRE: Grupo = "Pré-flop"
const POS: Grupo = "Pós-flop e resultado"

// [grupo, nome, valores por período, mínimo do alvo, máximo do alvo, nota, meta do período atual, fonte]
type Linha = [
  Grupo,
  string,
  (number | null)[],
  number,
  number,
  string,
  string?,
  string?,
]

// As métricas semanais vêm dos leaks do mês que cada jogador leva para o painel.
const SEMANAIS: Linha[] = []

// Análises que só fazem sentido com amostra grande (HUD mensal): grupo, nome, alvo.
const MENSAIS_ALVOS: [Grupo, string, number, number][] = [
  [PRE, "RFI BTN · 15–25bb", 45, I],
  [PRE, "RFI CO · 15–25bb", 30, I],
  [PRE, "RFI HJ · 15–25bb", 26, I],
  [PRE, "RFI LJ · 15–25bb", 23, I],
  [PRE, "RFI CO · 10–15bb", 9, I],
  [PRE, "Open jam BTN · 15–25bb", 10, I],
  [PRE, "3bet do BB vs steal", 15, 20],
  [POS, "Turn cbet — fora de posição", 65, I],
  [POS, "2nd barrel — fora de posição", 56, 60],
  [POS, "X/C após o check — fora de posição", 35, 40],
  [POS, "Delayed cbet — fora de posição", 70, I],
  [POS, "Turn cbet — em posição", 60, I],
  [POS, "Raise de flop — em posição", 10, 15],
  [POS, "Fold vs check-raise — em posição", 35, 40],
  [POS, "Fold turn vs 2nd barrel — em posição", 40, 45],
  [POS, "Fold no river — em posição", 50, I],
  [POS, "Fold no river — fora de posição", -I, 55],
  [POS, "X/R de turn — BB", 10, I],
]
const MENSAIS: Linha[] = MENSAIS_ALVOS.map(([g, nome, lo, hi]) => [
  g,
  nome,
  [],
  lo,
  hi,
  "",
])

function metricas(escopo: Escopo, linhas: Linha[]): Metrica[] {
  return linhas.map(([grupo, nome, , lo, hi, nota, meta, fonte]) => ({
    id: `${escopo}:${nome}`,
    escopo,
    grupo,
    nome,
    lo,
    hi,
    nota,
    meta,
    fonte,
  }))
}

export const METRICAS: Metrica[] = [
  ...metricas("semana", SEMANAIS),
  ...metricas("mes", MENSAIS),
]

const doisDigitos = (n: number) => String(n).padStart(2, "0")

// Quem chega começa com uma semana e um mês abertos e vazios.
function painelInicial(): DadosPainel {
  const hoje = new Date()
  const dia = `${doisDigitos(hoje.getDate())}/${doisDigitos(hoje.getMonth() + 1)}`
  const mes = `${doisDigitos(hoje.getMonth() + 1)}/${hoje.getFullYear()}`
  const vazio = (id: string, data: string): Periodo => ({
    id,
    data,
    maos: null,
    fechado: false,
    valores: {},
  })
  return {
    semana: [vazio("semana-1", dia)],
    mes: [vazio("mes-1", mes)],
    metricasSemana: [],
  }
}

export const PAINEL_INICIAL: DadosPainel = painelInicial()

function ehObj(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null
}

function periodosValidos(v: unknown): Periodo[] | null {
  if (!Array.isArray(v)) return null
  return v.filter(
    (p): p is Periodo =>
      ehObj(p) &&
      typeof p.id === "string" &&
      typeof p.data === "string" &&
      typeof p.fechado === "boolean" &&
      ehObj(p.valores)
  )
}

// JSON não guarda Infinity: no armazenamento o "sem limite" vira ±SEM_LIMITE.
const SEM_LIMITE = 1e9

const limiteParaSalvar = (n: number) =>
  n === Infinity ? SEM_LIMITE : n === -Infinity ? -SEM_LIMITE : n
const limiteLido = (n: number) =>
  n >= SEM_LIMITE ? Infinity : n <= -SEM_LIMITE ? -Infinity : n

function metricasValidas(v: unknown): Metrica[] | null {
  if (!Array.isArray(v)) return null
  return v
    .filter(
      (m): m is Metrica =>
        ehObj(m) &&
        typeof m.id === "string" &&
        typeof m.nome === "string" &&
        typeof m.lo === "number" &&
        typeof m.hi === "number" &&
        typeof m.nota === "string"
    )
    .map((m) => ({ ...m, lo: limiteLido(m.lo), hi: limiteLido(m.hi) }))
}

function ciclosValidos(v: unknown): Ciclo[] {
  if (!Array.isArray(v)) return []
  return v.flatMap((c) => {
    if (!ehObj(c) || typeof c.id !== "string") return []
    const metricas = metricasValidas(c.metricas)
    const periodos = periodosValidos(c.periodos)
    if (!metricas || !periodos) return []
    return [
      {
        id: c.id,
        rotulo: typeof c.rotulo === "string" ? c.rotulo : "Ciclo anterior",
        origem: typeof c.origem === "string" ? c.origem : undefined,
        encerradoEm: typeof c.encerradoEm === "string" ? c.encerradoEm : "",
        metricas,
        periodos,
      },
    ]
  })
}

export function lerPainel(): DadosPainel {
  const bruto = readJSON<unknown>(CHAVE_PAINEL, null, ehObj)
  if (!ehObj(bruto)) return PAINEL_INICIAL
  const semana = periodosValidos(bruto.semana)
  const mes = periodosValidos(bruto.mes)
  if (!semana || !mes) return PAINEL_INICIAL
  return {
    semana,
    mes,
    metricasSemana: metricasValidas(bruto.metricasSemana) ?? undefined,
    origemSemana:
      typeof bruto.origemSemana === "string" ? bruto.origemSemana : undefined,
    ciclos: ciclosValidos(bruto.ciclos),
  }
}

const paraSalvar = (m: Metrica): Metrica => ({
  ...m,
  lo: limiteParaSalvar(m.lo),
  hi: limiteParaSalvar(m.hi),
})

export function serializarPainel(d: DadosPainel): DadosPainel {
  return {
    ...d,
    metricasSemana: d.metricasSemana?.map(paraSalvar),
    ciclos: d.ciclos?.map((c) => ({
      ...c,
      metricas: c.metricas.map(paraSalvar),
    })),
  }
}

export function metricasDe(d: DadosPainel, escopo: Escopo): Metrica[] {
  if (escopo === "semana" && d.metricasSemana) return d.metricasSemana
  return METRICAS.filter((m) => m.escopo === escopo)
}

// Todas as métricas que já existiram, para comparar períodos de ciclos diferentes.
export function todasMetricas(d: DadosPainel): Metrica[] {
  const vistas = new Map<string, Metrica>()
  for (const m of [
    ...(d.ciclos ?? []).flatMap((c) => c.metricas),
    ...metricasDe(d, "semana"),
    ...metricasDe(d, "mes"),
  ])
    vistas.set(m.id, m)
  return [...vistas.values()]
}

// Transforma um leak do mês numa métrica semanal. O alvo é o lado da referência
// em que o leak deveria estar.
export function metricaDoLeak(l: Leak): Metrica {
  const abaixo = l.real < l.solver
  return {
    id: `semana:${l.mes}:${l.id}`,
    escopo: "semana",
    grupo: l.fase === "preflop" ? PRE : POS,
    nome: `${l.stat} — ${l.spot}`,
    lo: abaixo ? l.solver : -Infinity,
    hi: abaixo ? Infinity : l.solver,
    nota: l.fazer,
    fonte: rotuloMes(l.mes),
  }
}

export function leakNoPainel(l: Leak): boolean {
  const id = metricaDoLeak(l).id
  return metricasDe(lerPainel(), "semana").some((m) => m.id === id)
}

// Leva um leak do mês para as métricas do ciclo atual do painel semanal.
export function levarLeak(l: Leak): void {
  const d = lerPainel()
  const m = metricaDoLeak(l)
  const atuais = metricasDe(d, "semana")
  if (atuais.some((x) => x.id === m.id)) return
  writeJSON(
    CHAVE_PAINEL,
    serializarPainel({
      ...d,
      metricasSemana: [...atuais, m],
      origemSemana: d.origemSemana ?? l.mes,
    })
  )
}

// Tira o leak das métricas atuais; os números já lançados nas semanas ficam.
export function tirarLeak(l: Leak): void {
  const d = lerPainel()
  const id = metricaDoLeak(l).id
  writeJSON(
    CHAVE_PAINEL,
    serializarPainel({
      ...d,
      metricasSemana: metricasDe(d, "semana").filter((x) => x.id !== id),
    })
  )
}

// Fecha o ciclo das semanas: guarda métricas e semanas no arquivo e abre um
// ciclo novo, sem métricas, para receber os leaks do mês seguinte.
export function encerrarCiclo(d: DadosPainel): DadosPainel {
  const primeira = d.semana[0]
  const ultima = d.semana[d.semana.length - 1]
  const hoje = new Date().toLocaleDateString("pt-BR")
  const ciclo: Ciclo = {
    id: novoId(),
    rotulo: primeira
      ? `Semanas ${primeira.data} a ${ultima.data}`
      : "Ciclo sem semanas",
    origem: d.origemSemana,
    encerradoEm: hoje,
    metricas: metricasDe(d, "semana"),
    periodos: d.semana.map((p) => ({ ...p, fechado: true })),
  }
  const nova: Periodo = {
    id: `semana-${Date.now().toString(36)}`,
    data: ultima ? proximaData("semana", ultima.data) : "",
    maos: null,
    fechado: false,
    valores: {},
  }
  return {
    ...d,
    semana: [nova],
    metricasSemana: [],
    origemSemana: undefined,
    ciclos: [...(d.ciclos ?? []), ciclo],
  }
}

// Distância até a faixa-alvo: 0 dentro do alvo.
export function distancia(v: number, m: Metrica): number {
  if (v < m.lo) return m.lo - v
  if (v > m.hi) return v - m.hi
  return 0
}

export type Estado = "alvo" | "perto" | "longe"

export function estado(v: number, m: Metrica): Estado {
  const d = distancia(v, m)
  return d === 0 ? "alvo" : d <= 2 ? "perto" : "longe"
}

export const ROTULO_ESTADO: Record<Estado, string> = {
  alvo: "No alvo",
  perto: "Perto",
  longe: "Longe",
}

export function faixa(m: Metrica): string {
  const n = (x: number) => String(x).replace(".", ",")
  if (m.lo === -Infinity) return `até ${n(m.hi)}`
  if (m.hi === Infinity) return `${n(m.lo)} ou mais`
  return `${n(m.lo)} a ${n(m.hi)}`
}

export type Tendencia = {
  delta: number
  sentido: "melhorou" | "piorou" | "igual"
}

// Compara dois valores pelo quanto cada um está longe do alvo.
export function comparar(antes: number, agora: number, m: Metrica): Tendencia {
  const delta = Math.round((agora - antes) * 10) / 10
  const d = distancia(agora, m) - distancia(antes, m)
  const sentido = d < -0.05 ? "melhorou" : d > 0.05 ? "piorou" : "igual"
  return { delta, sentido }
}

export function proximaData(escopo: Escopo, data: string): string {
  const dois = (n: number) => String(n).padStart(2, "0")
  if (escopo === "semana") {
    const m = /^(\d{1,2})\/(\d{1,2})/.exec(data)
    if (!m) return ""
    const d = new Date(
      new Date().getFullYear(),
      Number(m[2]) - 1,
      Number(m[1]) + 7
    )
    return `${dois(d.getDate())}/${dois(d.getMonth() + 1)}`
  }
  const m = /^(\d{1,2})\/(\d{4})$/.exec(data)
  if (!m) return ""
  const d = new Date(Number(m[2]), Number(m[1]), 1)
  return `${dois(d.getMonth() + 1)}/${d.getFullYear()}`
}

export function limiteAmostra(escopo: Escopo): number {
  return escopo === "semana" ? 5000 : 20000
}
