# Site do Poker KB

Site visual da base, na pasta `app/`. Tem três áreas: Teoria, Prática e Análise. Tema escuro com acento verde.

## Como rodar

```bash
cd app
npm install
npm run dev
```

O site usa HashRouter e `base: "./"`, então o build em `app/dist` abre de qualquer pasta.

## Stack

Vite, React 19, TypeScript estrito, Tailwind v4, shadcn/ui, react-router-dom, lucide-react. Fontes Schibsted Grotesk e Source Serif 4. As cores ficam em `app/src/index.css` (bloco `.dark`, paleta grafite, acento `#8ff0a8`).

## O que tem em cada área

- **Teoria** (`pages/teoria-index.tsx`, `teoria-15.tsx`, `data/mod15.ts`): temas agrupados em Geral, Pré-flop, Flop, Turn, River, Blind war, 3bet pot e PKO, sem numeração.
- **Prática** (`pages/pratica.tsx`, `components/poker/mesa.tsx`): treino de bet vs missed com mesa, hero no BTN, opener entre CO e HJ, 40bb. O RNG sorteia de 1 a 100 (`randomInt`), com botões B25, B50 e check.
- **Análise** (`pages/analise.tsx`), em quatro abas:
  - **Leaks do mês**: abre em "Prints e stats do HUD" (prints do mês e as 169 stats por seção). O botão "Ver os leaks do mês" leva à lista de leaks, separada em pré-flop e pós-flop.
  - **Comparação**: stats do HUD mês a mês e leaks, com as stats fixadas (estrela) primeiro.
  - **Painel semanal**: semanas, meses e comparação de períodos, com botão para salvar a semana e abrir a próxima.
    - As métricas semanais são os leaks do mês escolhidos em "Adicionar leaks do mês ao painel". "Encerrar o mês e começar outro" guarda as métricas e as semanas em "Ciclos anteriores" (nada é apagado, e dá para comparar em Comparar períodos) e abre um ciclo vazio para os leaks do mês seguinte. Leaks que continuam voltam na atualização mensal e entram de novo.
  - **Treino**: resultado do treino.

## Regras de exibição das stats

- O valor fica verde no alvo, amarelo perto da meta e vermelho longe. A tolerância de "perto" é por stat (padrão 2 pontos), editável em "Editar valores".
- A quantidade de mãos aparece pequena ao lado do nome da stat.
- Textos em minúsculas no meio da frase. Meses em `rotuloMes` (minúsculo) e `capitalizar` só quando o texto começa com eles.

## Onde os dados ficam

Os dados são locais do navegador, não do repositório. Os valores iniciais (setembro de 2026) estão no código.

| Dado | Chave |
| --- | --- |
| Último treino, sessões | `pkb:last`, `pkb:sessions` |
| Leaks | `pkb:leaks` |
| Painel | `pkb:painel2` |
| Stats do HUD, fixadas, tolerância | `pkb:hud`, `pkb:hud-fixadas`, `pkb:hud-tol` |
| Prints (imagens) | IndexedDB `pkb-prints` |

Arquivos principais de dados: `lib/hud.ts`, `lib/analise.ts`, `lib/painel.ts`, `lib/poker.ts`.

## Fluxo mensal

1. Receber os prints do HUD do mês e colocar em Leaks do mês.
2. Pedir ao Claude para extrair os números (vão para `lib/hud.ts` ou para "Editar valores").
3. Conferir as cores, fixar com a estrela o que quer acompanhar e abrir a Comparação.

## Pendências

- Dúvidas da teoria para o coach: tabuleiros intermediários, limite de low board, cartas do meio em dobrado.
- Pilotos dos módulos 14 e 17.
- Prints e números de outubro.
