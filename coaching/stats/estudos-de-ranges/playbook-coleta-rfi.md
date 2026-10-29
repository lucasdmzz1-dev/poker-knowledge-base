---
tags:
  - tema/stats
  - tema/ranges
---

# Playbook: coleta de árvores de RFI no 4BET Trainer

Como ler uma árvore de RFI completa (cabeçalho, stacks de todos os assentos, RP e range do hero) e gravar no padrão de `dicionario-arvores-rfi.md`. Baseado no playbook do PKO (`theory/tools/pko/pko-solver-playbook.md`), que tem as notas técnicas de navegação.

## Antes de começar
1. Chrome com a extensão Claude in Chrome conectada, na sessão do usuário já logada. Abrir https://4bet-trainer.netlify.app/ numa aba nova do grupo da sessão e clicar em SOLVER.
2. Conferir os filtros da situação no README dela (tipo, fase, stacks, busca). Não mudar os filtros no meio de uma situação. O tipo define a pasta: Vanilla em `vanilla/`, Bounty em `pko/` (com o fator progressivo, por exemplo 50%).
3. Dizer ao usuário qual situação será lida e quantas árvores.

## Por árvore (nesta ordem)
1. **Abrir a árvore pela lista** e anotar o `id`.
2. **Cabeçalho:** formato (Vanilla ou PKO), fase mostrada, estrutura, % do field restante, jogadores restantes, tamanho do field (se aparecer), posições pagas, "Média" (em aberto se é do torneio ou da mesa; anotar o BB em fichas e o SI para o teste do dicionário), SI, blinds e ante do nível (em fichas) e stack do hero em fichas. **Só PKO:** KOI e fator progressivo. Anotar também os filtros de reta final marcados. Ler pelo `document.body.innerText`, filtrando as linhas com "%", "bb", "$" e "left".
3. **Mesa:** stack (bb) de todos os assentos: UTG, UTG1, MP, LJ, HJ, CO, BTN, SB e BB. **Só PKO:** o bounty ($) de cada assento junto do stack. Se a mesa tiver menos de 9 assentos, gravar só os que existem e anotar em `obs`.
4. **Range do hero:** clicar só no rótulo da posição do hero no card do cabeçalho (nunca em fold, raise ou all-in, que avançam a árvore). Ler fold, raise (com o tamanho) e all-in na faixa "<POS> RANGE".
5. **Matriz de RP:** ler o RP do hero contra SB e BB, e deles contra o hero.
6. **Grade:** rodar o script abaixo. Na primeira árvore, conferir quais cores aparecem e qual é a do all-in. Conferir a soma contra os totais do passo 4.
7. **Voltar à lista** pelo botão HHs (não o de compartilhar).
8. **Gravar** a ficha em `arvores/<id>.md` e o registro em `dados/arvores.json`. A ficha começa pela linha de resumo do spot (formato no dicionário, seção "Identificação do spot").

## Script: resumo da grade por cor e por classe
Devolve, para cada classe de mão, o % ponderado por combos de cada cor encontrada. Cores conhecidas: raise = rgb(231, 76, 60), call = rgb(95, 163, 101). A cor do all-in ainda não foi registrada: o script lista toda cor que não é cinza, para identificá-la na primeira leitura. Saída curta (cabe no limite de ~1000 caracteres).

```js
(() => {
  const cls=(h)=>{ const a=h[0],b=h[1],t=h[2]; if(h.length===2){ return 'AA,KK,QQ,JJ,TT'.includes(h)?'Pa':('99,88,77,66'.includes(h)?'Pm':'Pb'); }
    const hi='AKQJT'; if(t==='s'){ if(a==='A') return 'As'; if(a==='K') return 'Ks'; if('QJ'.includes(a)) return 'QJs'; return 'Sc'; }
    if(a==='A') return 'Ao'; if(hi.includes(a)&&hi.includes(b)) return 'Bo'; return 'Oo'; };
  const w=(h)=>h.length===2?6:(h[2]==='s'?4:12);
  const gray=(k)=>{const v=k.split('.').map(Number);return Math.max(...v)-Math.min(...v)<20;};
  const agg={}, tot={}; let W=0;
  document.querySelectorAll('.matrix-cell').forEach(c=>{
    const h=(c.querySelector('.cell-combo')||{}).textContent; if(!h) return;
    const cs=getComputedStyle(c); const parts={};
    const m=[...cs.backgroundImage.matchAll(/rgb\((\d+), (\d+), (\d+)\) (\d+(?:\.\d+)?)%, rgb\(\d+, \d+, \d+\) (\d+(?:\.\d+)?)%/g)];
    if(m.length){ m.forEach(x=>{const k=x[1]+'.'+x[2]+'.'+x[3]; parts[k]=(parts[k]||0)+parseFloat(x[5])-parseFloat(x[4]);}); }
    else { parts[cs.backgroundColor.match(/\d+/g).slice(0,3).join('.')]=100; }
    const k=cls(h), a=agg[k]||(agg[k]={w:0}); a.w+=w(h); W+=w(h);
    Object.entries(parts).forEach(([col,p])=>{ if(gray(col)) return; a[col]=(a[col]||0)+w(h)*p/100; tot[col]=(tot[col]||0)+w(h)*p/100; });
  });
  const cols=Object.keys(tot);
  return 'cores '+cols.map(c=>c+'='+(100*tot[c]/W).toFixed(1)).join(' ')+' || '+
    Object.keys(agg).map(k=>k+' '+cols.map(c=>Math.round(100*(agg[k][c]||0)/agg[k].w)).join('/')).join(' | ');
})()
```

A grade célula a célula (campo `grid`) passa do limite de saída. Para gravá-la, escrever o texto dentro do elemento `main` e ler com `get_page_text`, como no PKO.

## Checklist por árvore
- [ ] id e tipo conferido: Vanilla → `vanilla/`, Bounty → `pko/`
- [ ] fase (mostrada e classificada) com o % do field restante
- [ ] tamanho do field (e se veio do cabeçalho ou foi calculado), restantes, pagos, jogadores até o ITM
- [ ] blinds e ante do nível (fichas), SI, estrutura, filtros de reta final
- [ ] "Média" do cabeçalho, BB em fichas e SI (teste da média), stack do hero em bb e fichas
- [ ] stacks dos 9 assentos, número de jogadores na mesa, quem cobre o hero
- [ ] linha de resumo do spot no topo da ficha
- [ ] só PKO: koi, fator progressivo e bounty dos 9 assentos
- [ ] f, r (e tamanho), ai
- [ ] RP contra SB e BB
- [ ] classes (10) e, se der, grade de 169
- [ ] soma da grade confere com os totais

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[coaching/stats/estudos-de-ranges/README|coaching/stats/estudos-de-ranges]]

**Mesma pasta:** [[coaching/stats/estudos-de-ranges/dicionario-arvores-rfi|dicionario-arvores-rfi]]

<!-- graphify-links:end -->
