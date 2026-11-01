# Site do Poker KB (protótipo do módulo 15)

Site estático, sem build e sem dependências: HTML, CSS e JavaScript simples. Por enquanto só o módulo 15 (Bet vs Missed C-Bet) está implementado, como piloto.

## Como abrir

```bash
python -m http.server 4173 --directory site
```

Depois abra `http://localhost:4173`.

## Estrutura

- `index.html`: tela inicial com as três portas e a linha "Continuar".
- `teoria/`: lista de temas e a página do módulo 15.
- `pratica/`: trainer pós-flop (board, mão e RNG de 1 a 100; botões Check, B25 e B50).
- `analise/`: evolução nos temas do trainer (só sessões que você leva) e áreas em construção.
- `assets/js/data-mod15.js`: os dados do módulo 15 (tipos de flop, buckets, boards de referência e situações do trainer).

## Como o trainer decide

A situação traz o bucket da mão (100%, 75%, 50% ou 25%). O RNG sorteado de 1 a 100 decide: se for menor ou igual ao bucket, a resposta é apostar com o size do tipo de flop (B25 ou B50). Senão, é check.

## Regras dos dados

- As situações vêm das tabelas do guideline em imagem do instrutor (`theory/15-Bet-vs-Missed/03-Solver.md` e `12-Padroes.md`).
- Só entram boards com classificação validada. O dobrado ficou de fora do trainer porque o subtipo seco ou carregado do K-K-7 ainda é inferência.
- O histórico fica no navegador (`localStorage`). Nada é enviado a servidor.
