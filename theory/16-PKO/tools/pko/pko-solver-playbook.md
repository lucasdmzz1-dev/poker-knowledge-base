---
tags:
  - modulo/16-pko
  - tema/pko
  - street/preflop
  - posicao/ip
  - tema/icm
  - tipo/nota
---

# Playbook: coleta de árvores do 4BET Trainer (PKO) por automação

Objetivo: coletar várias árvores do BTN contra open (variando stack, stacks atrás, bounties, pote e fase), guardar as variáveis e o range, e achar padrões que movem o fold, o call e o 3bet.

## Como entrar
1. Chrome com a extensão Claude in Chrome conectada (a sessão do usuário, já logada).
2. Abrir https://4bet-trainer.netlify.app/ e clicar em SOLVER (menu do topo: TRAINER, SOLVER, SESSIONS, DRILLS).
3. A biblioteca (HRC Library) tem filtros: tipo (Vanilla, Bounty, Mystery Bounty, Satélites), fator progressivo do PKO (50%, 70%, 75%), fase, tamanho do field, jogadores restantes, stack médio, e a busca por chips (posição + stack, por exemplo "BTN 30").
4. Cada linha da lista é uma mesa completa, com stack por posição. Clicar na linha abre o visualizador: árvore de ações no topo (um cartão por posição, com FOLD, CALL, RAISE), grade de ranges, mesa com stacks e bounties, e matriz de Risk Premium.
5. O botão "Recolher" (HRC Library) alterna o painel da biblioteca.

## Como ler a grade (sem print)
- A grade é DOM, não canvas: 169 elementos `.matrix-cell`, na ordem AA, AKs, AQs, ... (linha a linha).
- Cada célula tem o rótulo em `.cell-combo` e o EV em `.cell-frequency`.
- A frequência está no `background-image` (linear-gradient horizontal) ou, se for uma ação só, no `background-color`.
- Cores: raise = rgb(231, 76, 60), call = rgb(95, 163, 101), fold = cinza.
- Limites da ferramenta de JavaScript: a resposta passa de ~1.000 caracteres e é cortada. Uma string longa de letras e números é bloqueada como "base64". Atributos no formato nome=valor também são bloqueados. Por isso: devolver números separados por espaço ou resumos curtos.

## Resumo por classe de mão (cabe em uma chamada, ~200 caracteres)
Classes: P-alto (AA-TT), P-medio (99-66), P-baixo (55-22), Axs, Kxs, QJxs, Suited-con, Axo, Broad-off, Outras-off. Para cada uma: % de 3bet e % de call, ponderado por combos (par 6, suited 4, offsuit 12).

```js
(() => {
  const R='231.76.60',C='95.163.101';
  const cls=(h)=>{ const a=h[0],b=h[1],t=h[2]; if(h.length===2){ return 'AA,KK,QQ,JJ,TT'.includes(h)?'P-alto':('99,88,77,66'.includes(h)?'P-medio':'P-baixo'); }
    const hi='AKQJT'; if(t==='s'){ if(a==='A') return 'Axs'; if(a==='K') return 'Kxs'; if('QJ'.includes(a)) return 'QJxs'; return 'Suited-con'; }
    if(a==='A') return 'Axo'; if(hi.includes(a)&&hi.includes(b)) return 'Broad-off'; return 'Outras-off'; };
  const w=(h)=>h.length===2?6:(h[2]==='s'?4:12);
  const agg={};
  document.querySelectorAll('.matrix-cell').forEach(c=>{
    const h=(c.querySelector('.cell-combo')||{}).textContent; const cs=getComputedStyle(c); let r=0,g=0;
    const m=[...cs.backgroundImage.matchAll(/rgb\((\d+), (\d+), (\d+)\) (\d+(?:\.\d+)?)%, rgb\(\d+, \d+, \d+\) (\d+(?:\.\d+)?)%/g)];
    if(m.length){ m.forEach(x=>{const k=x[1]+'.'+x[2]+'.'+x[3]; const d=parseFloat(x[5])-parseFloat(x[4]); if(k===R) r+=d; else if(k===C) g+=d;}); }
    else { const k=cs.backgroundColor.match(/\d+/g).slice(0,3).join('.'); if(k===R) r=100; else if(k===C) g=100; }
    const k=cls(h); const a=agg[k]||(agg[k]={w:0,r:0,c:0}); a.w+=w(h); a.r+=w(h)*r/100; a.c+=w(h)*g/100;
  });
  return Object.keys(agg).map(k=>k+' 3b'+Math.round(100*agg[k].r/agg[k].w)+' c'+Math.round(100*agg[k].c/agg[k].w)).join(' | ');
})()
```

Metadados do spot (stacks, bounties, pote, % do field, stack médio): ler pelo `document.body.innerText` filtrando linhas com BB, $, % e Pot. Totais do range: linhas FOLD, CALL e RAISE do painel do hero.

## Variáveis a guardar por árvore
Hero (BTN): stack, bounty. Opener: posição, stack, bounty, tamanho do open. SB e BB: stack e bounty (stacks atrás). Menor stack da mesa. Pote (dead money). % de field left e stack médio. Fase. Fator progressivo. RP contra o opener (matriz de Risk Premium). Saída: fold, call e 3bet totais, mais as 10 classes acima.

## O que já foi coletado (sessão de 27/10/2026)
- #5844: Bounty 50%, Early, BTN 48bb contra CO 46,6bb, bounties de $5. Totais: fold 72,7%, call 20,7%, 3bet 6,7%. Grade completa em `dash-data/pko_btn_vs_co_early50_48bb.json` (5% de precisão).
- #7067: Bounty, 43% do field, média 44bb, BTN 52,8bb contra CO 52,6bb, bounties de $125 a $375, SB 14,8bb, BB 27,9bb. Totais: fold 69,4%, call 17,1%, 3bet 13,5%. Grade em `dash-data/pko_btn_vs_co_7067.json`.
- Diferença: o 3bet dobra (6,7% para 13,5%). AQo passa de 100% call para 100% 3bet. KJs, JTs, K8s e 97s viram 3bet. A5o, A7o e A8o entram como blefe de 3bet.
- Base Vanilla (ChipEV 40bb, GTO Wizard): BTN contra CO, fold 75,1%, call 15,1%, 3bet 9,8%.

## Pendências para a próxima sessão
1. Automatizar a navegação: a partir da lista, abrir cada linha e chegar ao nó "BTN contra open do CO/HJ/LJ" (clicar FOLD nos cartões anteriores e RAISE no opener, na árvore de ações do topo). Testar como a árvore responde a cliques por JavaScript.
2. Usar a busca por posição e stack para varrer várias linhas por chamada (umas 5 árvores por chamada, devolvendo só o resumo por classe).
3. Guardar cada árvore (variáveis + 10 classes) num arquivo JSON e, com ~40 árvores, ajustar regras: quais variáveis movem o 3bet, o call e as mãos.
4. Cruzar as regras com as mãos reais do usuário no BTN (folds, calls e 3bets já lidos) e atualizar o painel com filtro por cenário.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/16-PKO/README|theory/16-PKO]]

**Mesma pasta:** [[theory/16-PKO/tools/pko/pko-conhecimento|pko-conhecimento]] · [[theory/16-PKO/tools/pko/pko-maos-dicionario|pko-maos-dicionario]] · [[theory/16-PKO/tools/pko/regras-vivas-pko-btn|regras-vivas-pko-btn]]

<!-- graphify-links:end -->
