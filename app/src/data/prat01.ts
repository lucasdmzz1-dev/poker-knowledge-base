export type AcaoCbet = "Check" | "B25" | "B40"
export type BoardCbet = "ahigh" | "broadway" | "highcard" | "low"

export const BOARD_CBET: Record<
  BoardCbet,
  { nome: string; freq: string; board: string[]; estrategia: string }
> = {
  ahigh: {
    nome: "A HIGH",
    freq: "100%",
    board: ["Ad", "8c", "4s"],
    estrategia:
      "Bet range: vantagem enorme e quase nenhum check-raise. O size é o B25, porque o range do BTN é largo e tem muito thin value. O B40 foldaria só 8 a 10% a mais, então misturar os dois também vale.",
  },
  broadway: {
    nome: "Broadway",
    freq: "84%",
    board: ["Ks", "Td", "6c"],
    estrategia:
      "Vantagem de equity e de nuts, então o c-bet fica perto de 85% em B25. Com essa frequência bet e check têm o mesmo EV, e o split não compensa.",
  },
  highcard: {
    nome: "High card conectado",
    freq: "52%",
    board: ["Js", "8d", "4s"],
    estrategia:
      "O board toma muito check-raise, então você monta um range de check para realizar equity. Como aposta um grupo mais seleto, o size sobe para B40.",
  },
  low: {
    nome: "Low",
    freq: "55%",
    board: ["9s", "8d", "5c"],
    estrategia:
      "Mesmo split do high card conectado: o board interage com o range do BB e toma check-raise. Apostando um grupo seleto, o size é o B40.",
  },
}

export interface SituacaoCbet {
  id: string
  tipo: BoardCbet
  hero: [string, string]
  certa: AcaoCbet
  // Outras ações que o instrutor também aceita (mix de sizes).
  aceita?: AcaoCbet[]
  classe: string
  porque: string
}

// Cada mão vem da aula e do guideline do módulo 01. Nos boards de split, aposta (B40)
// quem aceita jogar bet/fold, o draw que quer colocar o stack e a parte off que bloqueia
// o flush draw. Dá check quem quer realizar equity: second e third pair, draws que
// importam, high card com backdoor, os piores top pairs e o top set.
export const situacoesCbet: SituacaoCbet[] = [
  // A high: bet range
  {
    id: "a-ak",
    tipo: "ahigh",
    hero: ["Ah", "Kd"],
    certa: "B25",
    aceita: ["B40"],
    classe: "Top pair",
    porque: "No A high o range inteiro aposta, e o size padrão é o B25.",
  },
  {
    id: "a-over",
    tipo: "ahigh",
    hero: ["Qc", "Jh"],
    certa: "B25",
    aceita: ["B40"],
    classe: "Duas overcards",
    porque:
      "Com tanta vantagem de equity e de nuts, até a mão sem pair aposta.",
  },
  {
    id: "a-gut",
    tipo: "ahigh",
    hero: ["7c", "6c"],
    certa: "B25",
    aceita: ["B40"],
    classe: "Draw fraco",
    porque:
      "É bet range: o board quase não toma check-raise, então não precisa de check.",
  },
  {
    id: "a-set",
    tipo: "ahigh",
    hero: ["8h", "8s"],
    certa: "B25",
    aceita: ["B40"],
    classe: "Trinca",
    porque: "A trinca também aposta. O valor dela não se perde no B25.",
  },
  {
    id: "a-bdfd",
    tipo: "ahigh",
    hero: ["Ks", "Qs"],
    certa: "B25",
    aceita: ["B40"],
    classe: "Duas overcards com backdoor",
    porque: "No A high o backdoor não pede check. O bet range aposta tudo.",
  },
  {
    id: "a-low",
    tipo: "ahigh",
    hero: ["5h", "3h"],
    certa: "B25",
    aceita: ["B40"],
    classe: "Mão fraca",
    porque: "Até a mão fraca aposta no A high: o BB quase não reage com raise.",
  },

  // Broadway: frequência muito alta
  {
    id: "b-tp",
    tipo: "broadway",
    hero: ["Kh", "Qd"],
    certa: "B25",
    classe: "Top pair",
    porque: "Rei com dama nunca dá check no broadway. O size é o B25.",
  },
  {
    id: "b-ak",
    tipo: "broadway",
    hero: ["Ah", "Kc"],
    certa: "B25",
    classe: "Top pair",
    porque: "Top pair aposta em B25: a frequência do board fica perto de 85%.",
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
    id: "b-set",
    tipo: "broadway",
    hero: ["Tc", "Th"],
    certa: "B25",
    classe: "Trinca",
    porque:
      "O board não toma muito check-raise, então a trinca também aposta B25.",
  },

  // High card conectado (J84 com dois de espadas): split com B40
  {
    id: "h-ak-blocker",
    tipo: "highcard",
    hero: ["As", "Kd"],
    certa: "B40",
    classe: "High card da parte off com o blocker do flush",
    porque:
      "A parte off aposta bloqueando o flush draw: o BB dá menos check-raise e você realiza mais equity.",
  },
  {
    id: "h-k2-blocker",
    tipo: "highcard",
    hero: ["Ks", "2c"],
    certa: "B40",
    classe: "High card da parte off com o blocker do flush",
    porque:
      "Mão sem valor de showdown que bloqueia o flush draw aposta no split.",
  },
  {
    id: "h-lixo",
    tipo: "highcard",
    hero: ["Qc", "5h"],
    certa: "B40",
    classe: "Lixo da parte off",
    porque:
      "Sem backdoor e sem showdown value, a mão aceita o bet/fold e aposta B40.",
  },
  {
    id: "h-combo",
    tipo: "highcard",
    hero: ["Ts", "9s"],
    certa: "B40",
    classe: "Duas pontas com flush draw",
    porque:
      "É o draw que você quer colocar o stack, então aposta e vai para cima.",
  },
  {
    id: "h-oesd-blocker",
    tipo: "highcard",
    hero: ["Ts", "9h"],
    certa: "B40",
    classe: "Duas pontas com o blocker do flush",
    porque:
      "Draw direto da parte off que bloqueia o flush draw: aposta e consegue jogar por stacks.",
  },
  {
    id: "h-tp-k",
    tipo: "highcard",
    hero: ["Kh", "Jd"],
    certa: "B40",
    classe: "Top pair",
    porque: "Os top pairs apostam por valor, em B40.",
  },
  {
    id: "h-tp-a",
    tipo: "highcard",
    hero: ["Ad", "Jc"],
    certa: "B40",
    classe: "Top pair",
    porque: "O top pair com kicker forte aposta B40.",
  },
  {
    id: "h-oesd-sem",
    tipo: "highcard",
    hero: ["Tc", "9c"],
    certa: "Check",
    classe: "Duas pontas sem segurança extra",
    porque:
      "Draw que você quer realizar, sem blocker e sem flush draw: dá check para ver o turn.",
  },
  {
    id: "h-sp",
    tipo: "highcard",
    hero: ["Kc", "8c"],
    certa: "Check",
    classe: "Second pair",
    porque:
      "Second pair dá check. Só o second pair com top kicker aposta, e no começo vale não apostar nenhum.",
  },
  {
    id: "h-tp3",
    tipo: "highcard",
    hero: ["Qh", "4h"],
    certa: "Check",
    classe: "Third pair",
    porque: "Third pair dá check para realizar equity.",
  },
  {
    id: "h-topset",
    tipo: "highcard",
    hero: ["Jh", "Jd"],
    certa: "Check",
    classe: "Top set",
    porque:
      "O top set dá check 100%: no check-check você consegue colocar todas as fichas no turn e no river.",
  },
  {
    id: "h-pior-tp",
    tipo: "highcard",
    hero: ["Jc", "5d"],
    certa: "Check",
    classe: "Pior top pair",
    porque: "Os piores top pairs vão para o check, por linearidade.",
  },
  {
    id: "h-bdfd",
    tipo: "highcard",
    hero: ["Ad", "Qd"],
    certa: "Check",
    classe: "High card com backdoor flush draw",
    porque:
      "High card com backdoor quer realizar equity. Dá check e vê o turn.",
  },
  {
    id: "h-k5-bdfd",
    tipo: "highcard",
    hero: ["Kd", "5d"],
    certa: "Check",
    classe: "High card com backdoor flush draw",
    porque:
      "Rei com cinco suited não joga contra check-raise. Dá check, com o backdoor de ouros.",
  },

  // Low (985 rainbow): split com B40
  {
    id: "l-ak-off",
    tipo: "low",
    hero: ["Ah", "Kc"],
    certa: "B40",
    classe: "High card off",
    porque:
      "High card off não tem backdoor e aceita o bet/fold. Vai para cima, em B40.",
  },
  {
    id: "l-aq-off",
    tipo: "low",
    hero: ["Ah", "Qc"],
    certa: "B40",
    classe: "High card off",
    porque: "Ás, valete e dama off sem backdoor apostam B40.",
  },
  {
    id: "l-oesd1",
    tipo: "low",
    hero: ["Jh", "Tc"],
    certa: "B40",
    classe: "Duas pontas",
    porque:
      "Duas pontas e duas overcards têm muita equity para aguentar o raise.",
  },
  {
    id: "l-oesd2",
    tipo: "low",
    hero: ["Th", "7c"],
    certa: "B40",
    classe: "Duas pontas",
    porque: "Draw direto que dá para colocar o stack aposta B40.",
  },
  {
    id: "l-tp",
    tipo: "low",
    hero: ["9h", "Kd"],
    certa: "B40",
    classe: "Top pair",
    porque: "Top pair aposta por valor, em B40.",
  },
  {
    id: "l-sp-conecta",
    tipo: "low",
    hero: ["8h", "7c"],
    certa: "B40",
    classe: "Second pair que conecta",
    porque:
      "O 8x que conecta com o board (87, 86) aposta mais, porque tem equity para continuar.",
  },
  {
    id: "l-sp-topkicker",
    tipo: "low",
    hero: ["Ah", "8h"],
    certa: "Check",
    classe: "Melhor second pair",
    porque:
      "O melhor 8x costuma ir para o check. O second pair é o seu call-down natural quando você checa os top pairs.",
  },
  {
    id: "l-tp3",
    tipo: "low",
    hero: ["Kd", "5h"],
    certa: "Check",
    classe: "Third pair",
    porque: "Third pair dá check para realizar equity.",
  },
  {
    id: "l-bdfd",
    tipo: "low",
    hero: ["As", "Js"],
    certa: "Check",
    classe: "High card com backdoor flush draw",
    porque:
      "High card suited, com backdoor, não se sente confortável em bet/call. Dá check.",
  },
  {
    id: "l-topset",
    tipo: "low",
    hero: ["9h", "9d"],
    certa: "Check",
    classe: "Top set",
    porque:
      "O top set dá check como trap, para colocar as fichas no turn e no river.",
  },
  {
    id: "l-broca",
    tipo: "low",
    hero: ["Kd", "6h"],
    certa: "Check",
    classe: "Broca",
    porque: "Broca não é boa para atolar. Dá check.",
  },
  {
    id: "l-pior-tp",
    tipo: "low",
    hero: ["9c", "3h"],
    certa: "Check",
    classe: "Pior top pair",
    porque: "Os piores top pairs vão para o check.",
  },
]
