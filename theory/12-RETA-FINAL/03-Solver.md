# Solver — Reta Final

## Módulo 12 — Reta Final

---

# Status

Pendente de preenchimento detalhado.

A aula mostrou cerca de sete simulações do GTO Wizard, que não serão capturadas. O que existe como referência de solver para esta fase são os mapas de RFI do BTN e do CO levantados fora da aula.

---

# Referência: RFI em ChipEV e 10% field left

Como a reta final é geralmente o cenário 10% field left, o range de abertura desta fase segue estes mapas.

| Posição e stack | ChipEV | 10% field left |
|---|---|---|
| BTN 25bb | 45,0% | 41,1% |
| BTN 20bb | 41,5% | 39,1% |
| BTN 15bb | 38,0% | 38,5% |
| CO 25bb | 34,4% | 31,7% |
| CO 20bb | 31,2% | 30,0% |
| CO 15bb | 28,8% | 28,1% |

Padrão observado:

- O 10% field left aperta o range de abertura, principalmente em 25 e 20bb, e o efeito encolhe conforme o stack cai. Em 15bb os dois cenários são praticamente iguais.
- O que sai é sempre o fundo dos suited (conectores e gappers baixos).
- O que entra é pouco (por exemplo A4o em parte no CO, e 33 e A2o no BTN em 25bb).

---

# Pendente

- Mapas de defesa (BB) e de squeeze em 10% field left.
- Stacks de 30 a 40bb nos mapas de RFI.
