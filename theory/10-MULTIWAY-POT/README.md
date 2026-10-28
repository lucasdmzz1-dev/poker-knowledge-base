# Multiway Pot

## Módulo 10 — Multiway Pot

---

# Contexto

Stack:
40bb (base estudada — não testado ainda em 15-20bb)

Spot:
Pote a 3 (Multiway) — EP abre, BTN paga, BB paga

Posições estudadas:

- EP (agressor pré-flop, sempre OOP)
- BTN (flat, IP)
- BB (flat, OOP mas age depois do EP)

Street:
Flop e Turn (River ainda não coberto)

Fonte:

- Guideline do instrutor
- Videoaula prática
- Transcrição
- GTOWizard (função 3-way, recém-lançada)
- MDA (Massive Data Analysis) do field

---

# Objetivo do Módulo

Substituir a estratégia antiga de multiway (baseada em exploits genéricos e suposições) por uma estratégia fundamentada em solver 3-way (GTOWizard) e em dados reais de frequência do field.

O objetivo é entender:

- Por que a estratégia antiga (bet range OOP, bet-vs-missed = range de aposta, overfold generalizado) estava gerando prejuízo.
- Como o range de defesa multiway é fundamentalmente diferente do heads-up.
- As três situações práticas mais importantes: jogar como agressor (OOP), jogar em posição (IP) e jogar do Big Blind.

---

# Conceito Central

Em pote multiway, o range de defesa de cada jogador não foi desenhado para se defender de um único adversário — ele é montado pra aguentar dois. Isso muda tudo: o adversário que paga (seja BTN ou BB) **não fica com o range capado** do mesmo jeito que ficaria num pote a dois.

Dado confirmado por MDA do field: a frequência média de C-Bet no multiway gira em torno de **35%** — muito abaixo do que a antiga estratégia (quase range bet) assumia. Isso significa que quem enfrenta essa aposta **não deveria estar overfoldando**, porque o range de quem apostou já é naturalmente mais forte que num spot de alta frequência.

---

# Diferença Fundamental (vs Heads-Up)

- **Não dá pra apostar perto de range estando OOP** — o adversário em posição tem duas chances de te punir (o outro pagador e o efeito de "range desenhado pra dois").
- **Bet-vs-missed não é range de aposta** — nem para o agressor OOP, nem pra quem ataca em posição depois de um check.
- **Não existe overfold generalizado** — a instrução antiga de foldar top pair, second pair e third pair fora de boards secos estava incorreta e custava EV real.
- **Existe uma situação de Lead no Turn Blank que não existe em heads-up** — surge especificamente quando o agressor pré-flop deu check no flop (portanto não capou o range) e o Big Blind também não está capado.

---

# Estrutura do Módulo

## Situação 1 — Hero OOP (agressor)

EP abre, BTN e BB pagam. Como construir C-Bet, Turn e reação a Bet+Call.

---

## Situação 2 — Hero IP

EP abre, Hero (BTN) paga, BB paga. Como construir Bet-vs-Missed, reação a C-Bet e a Check-Raise, e o Turn.

---

## Situação 3 — Hero BB

EP abre, IP paga, Hero (BB) paga. As três sub-situações: quando o agressor dá check no flop, quando há Bet-vs-Missed com ação voltando pro BB no turn (Lead), e quando o agressor aposta o turn.

---

# Resultado Esperado

Ao finalizar este módulo o jogador deve conseguir:

- Parar de apostar perto de range estando OOP no multiway.
- Parar de tratar Bet-vs-Missed como aposta de range.
- Parar de overfoldar contra C-Bet e Check-Raise multiway.
- Entender quando (e por que) desenvolver Lead no Turn a partir do Big Blind.
- Saber quando NÃO existe Check-Raise (quando o agressor ainda "tem que falar") e quando NÃO existe Probe Turn (quando todos deram check no flop).

---

# Status

🚧 Em documentação — primeira passada baseada na aula prática. Divisão fina de combos, Solver detalhado e exercícios ainda pendentes.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/README|theory]]

**Nesta pasta:**

- [[theory/10-MULTIWAY-POT/01-Guideline|01-Guideline]]
- [[theory/10-MULTIWAY-POT/02-VideoAulas|02-VideoAulas]]
- [[theory/10-MULTIWAY-POT/03-Solver|03-Solver]]
- [[theory/10-MULTIWAY-POT/04-Exercicios|04-Exercicios]]
- [[theory/10-MULTIWAY-POT/05-Regras-Consolidadas|05-Regras-Consolidadas]]
- [[theory/10-MULTIWAY-POT/06-Pendencias|06-Pendencias]]
- [[theory/10-MULTIWAY-POT/07-Changelog|07-Changelog]]
- [[theory/10-MULTIWAY-POT/08-Referencias|08-Referencias]]
- [[theory/10-MULTIWAY-POT/09-Decisoes|09-Decisoes]]

<!-- graphify-links:end -->
