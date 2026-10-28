# 03-Solver.md
# XR Deep Stack

## Validações GTO e Padrões Encontrados

---

# 1. Objetivo do Solver

O solver foi utilizado para validar:

- construção do range de XR;
- composição dos bluffs;
- diferença entre XR e XC;
- influência dos naipes;
- importância da equidade futura.

O foco foi sempre:

Hero BB  
BTN C-Bet  
BB decide XR

---

# 2. Board K♠8♦3♣

## Característica

Board seco alto.

O solver mostrou que os XR bluff dependem principalmente de:

- backdoor flush draw;
- backdoor straight draw;
- overcards com capacidade de evolução.

---

## Conclusão

Cartas altas sozinhas não são suficientes.

Mãos com:

- pouca realização;
- backdoors;
- turns favoráveis;

possuem maior incentivo para XR.

---

# 3. Board T♠9♠7♦

## Característica

Board extremamente conectado.

O próprio board entrega muita equidade.

---

## Padrão encontrado

Mãos offsuit conectadas ganham força.

Exemplos:

- J8o;
- 86o;
- draws com equidade direta.

---

## Conclusão

Quanto mais o board entrega equidade:

- menos dependemos de backdoors;
- mais offs conectados podem aparecer.

---

# 4. Board A♠6♦4♣

## Característica

Board A-high seco.

---

## Padrão encontrado

Mãos marginais precisam carregar sua própria equidade.

Exemplo:

Q5o:

- possui overcard;
- possui broca;

mas:

- sem BDFD;
- sem BDSTR8;

prefere Fold.

---

## Conclusão

Over + broca sem estrutura adicional não é suficiente.

---

# 5. Board 9♠6♦3♣

## Característica

Board médio conectado.

---

## Padrão encontrado

XR aparece com:

- draws diretos;
- pares + draws;
- mãos conectadas.

---

## Conclusão

Fica entre:

board seco;

e board extremamente conectado.

---

# 6. Board 8♠8♦3♣

## Característica

Board pareado.

---

## Padrão encontrado

Range de XR mais polarizado.

Valor:

- trips;
- mãos fortes.

Bluffs:

- blockers;
- backdoors;
- baixa realização.

---

## Conclusão

Mãos médias com showdown frequentemente preferem XC.

---

# 7. Board A♠7♠3♠

## Característica

Board monotone.

---

## Padrão encontrado

O naipe altera completamente a função da mão.

---

Exemplo:

64o:

XR porque possui:

- broca;
- equidade direta;
- baixa realização.

64s:

XC porque:

- já possui valor realizado;
- quer manter bluffs.

---

## Conclusão

Ter o naipe não significa automaticamente XR.

Devemos avaliar a função da mão.

---

# 8. Board K♠Q♦9♣

## Característica

Board high connected.

---

## Padrão encontrado

A carta principal do range de bluff é o J.

Motivo:

- conecta o board;
- cria OESD;
- possui muitos turns favoráveis.

---

Exemplos:

- JT;
- T8;
- AJ com frequência.

---

# 9. Board 5♠3♦2♣

## Característica

Board low conectado.

---

## Padrão encontrado

Draws fortes entram para extrair.

Exemplo:

64:

- OESD;
- alta equidade;
- XR puro.

---

## Conclusão

Não é um bluff puro.

É uma mão de equidade que quer construir pote.

---

# 10. Board K♣7♦2♠

## Característica

Board seco.

---

## Padrão encontrado

Mãos com showdown relevante preferem XC.

Exemplo:

A5s:

- possui Ás alto;
- possui backdoor;

mas realiza bem.

---

Mãos como:

96s:

- pouco showdown;
- BDFD;
- BDSTR8;

possuem melhor perfil para XR.

---

# 11. Board A♠A♦5♣

## Característica

Board pareado alto.

---

## Padrão encontrado

Pouquíssimo XR.

Bluffs aparecem de:

- blockers;
- backdoors;
- pouca realização.

Exemplos:

- KQs;
- KJs;
- QJs com BDFD.

---

# 12. Board T♦8♦5♣

## Característica

Board com FD.

---

## Padrão encontrado

A parte OFF precisa de equidade direta.

Exemplos:

K9:

K♦9x:

- possui FD;
- overcard;
- capacidade de continuar.

K9 sem ♦:

- perde força;
- não possui estrutura suficiente.

---

# Conclusão Geral do Solver

O solver confirma:

XR Deep Stack é construído por:

- valor forte;
- equidade direta;
- backdoors;
- capacidade de continuar.

A composição do combo importa tanto quanto a categoria da mão.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Mesmo módulo:** [[theory/07-XR-DEEP/README|README]] · [[theory/07-XR-DEEP/02-VideoAulas|02-VideoAulas]] · [[theory/07-XR-DEEP/04-Exercicios|04-Exercicios]] · [[theory/07-XR-DEEP/05-Regras-Consolidadas|05-Regras-Consolidadas]] · [[theory/07-XR-DEEP/07-Changelog|07-Changelog]]

<!-- graphify-links:end -->
