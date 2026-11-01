# Site do Poker KB

Protótipo do site com o módulo 15 (Bet vs Missed C-Bet). Feito com Vite, React, TypeScript, Tailwind e shadcn/ui (estilo radix-nova, tema escuro com destaque verde).

## Como rodar

Precisa do Node.js (LTS) e do pnpm.

```bash
cd app
pnpm install
pnpm dev
```

Para gerar a versão estática (pasta `dist/`, publicável no GitHub Pages):

```bash
pnpm build
```

O roteamento usa hash (`#/teoria`), então funciona em hospedagem estática sem configuração extra.

## Estrutura

- `src/pages/`: tela inicial, Teoria (lista e módulo 15), Prática (trainer) e Análise.
- `src/data/mod15.ts`: dados do módulo 15 (tipos de flop, buckets, boards de referência e as situações do trainer).
- `src/components/poker/cards.tsx`: cartas (baralho de 4 cores) e a faixa do RNG.
- `src/components/ui/`: componentes do shadcn/ui.
- `src/index.css`: tema (cores, fontes Schibsted Grotesk e Source Serif 4).

## Como o trainer decide

A situação traz o bucket da mão (100%, 75%, 50% ou 25%). O RNG sorteado de 1 a 100 decide: se for menor ou igual ao bucket, a resposta é apostar com o size do tipo de flop (B25 ou B50). Senão, é check.

## Regras dos dados

- As situações vêm das tabelas do guideline em imagem do instrutor (`theory/15-Bet-vs-Missed/03-Solver.md` e `12-Padroes.md`).
- Só entram boards com classificação validada. O dobrado ficou de fora do trainer porque o subtipo seco ou carregado do K-K-7 ainda é inferência.
- O histórico fica no navegador (`localStorage`). Nada é enviado a servidor.
