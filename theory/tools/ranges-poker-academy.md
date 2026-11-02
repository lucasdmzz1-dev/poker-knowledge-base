# Ranges do Poker Academy usados na Prática

> Fonte: Poker Academy (Charts), ChipEV, Regular, lidos em 02/11/2026. O site é de 9 jogadores (EP, EP2, MP, LJ, HJ, CO, BTN, SB, BB). Os ranges ficam também em `app/src/data/ranges.ts`.

A mão entra no treino com qualquer frequência da ação, mesmo baixa. A mão que o site manda 100% para outra ação (fold ou 3bet) fica de fora. O open de 40bb do site é raise de 2,3x, e a mesa do treino mostra 2bb.

Onde cada range é usado:

- **EP2 e CO:** C-Bet OOP (módulo 05).
- **BTN com 20bb:** C-Bet IP Short Stack (módulo 01).
- **HJ, CO e BTN com 40bb:** C-Bet IP 40bb (módulo 02).
- **BTN paga o open do CO e do HJ:** Bet vs Missed (módulo 15).
- **BB contra o limp do SB:** BB raised pot vs SB (módulo 17).

---

## EP2 abre (RFI, 40bb, raise 2,3x, 17,4% das mãos)

- **100%:** AA, AKs, AQs, AJs, ATs, A9s, A8s, A7s, A6s, A5s, A4s, A3s, AKo, KK, KQs, KJs, KTs, K9s, K8s, AQo, KQo, QQ, QJs, QTs, Q9s, AJo, JJ, JTs, J9s, ATo, TT, T9s, T8s, 99, 88, 77, 66
- **Parciais:** KJo 86%, QJo 17%, KTo 32%, 98s 53%, 87s 35%, 76s 43%, 65s 28%, 55 31%, 54s 27%

## HJ abre (RFI, 40bb, raise 2,3x, 28,6%)

- **100%:** AA, AKs, AQs, AJs, ATs, A9s, A8s, A7s, A6s, A5s, A4s, A3s, A2s, AKo, KK, KQs, KJs, KTs, K9s, K8s, K7s, K6s, K5s, K4s, AQo, KQo, QQ, QJs, QTs, Q9s, Q8s, Q7s, AJo, KJo, QJo, JJ, JTs, J9s, J8s, ATo, KTo, QTo, JTo, TT, T9s, T8s, T7s, A9o, 99, 98s, 97s, A8o, 88, 87s, 86s, 77, 76s, 66, 65s, 55, 44
- **Parciais:** Q6s 93%, J7s 45%, K9o 19%, T9o 37%, 96s 2%, A7o 7%, 54s 88%

## CO abre (RFI, 40bb, raise 2,3x, 36,8%)

- **100%:** AA, AKs, AQs, AJs, ATs, A9s, A8s, A7s, A6s, A5s, A4s, A3s, A2s, AKo, KK, KQs, KJs, KTs, K9s, K8s, K7s, K6s, K5s, K4s, K3s, AQo, KQo, QQ, QJs, QTs, Q9s, Q8s, Q7s, Q6s, Q5s, AJo, KJo, QJo, JJ, JTs, J9s, J8s, J7s, ATo, KTo, QTo, JTo, TT, T9s, T8s, T7s, T6s, A9o, K9o, Q9o, T9o, 99, 98s, 97s, 96s, A8o, 88, 87s, 86s, A7o, 77, 76s, 66, 65s, A5o, 55, 54s, 44, 33
- **Parciais:** K2s 70%, Q4s 99%, J6s 91%, J9o 53%, K8o 2%, 85s 35%, 75s 68%, A6o 86%

## BTN abre (RFI, 40bb, raise 2,3x, 50,6%)

- **100%:** AA, AKs, AQs, AJs, ATs, A9s, A8s, A7s, A6s, A5s, A4s, A3s, A2s, AKo, KK, KQs, KJs, KTs, K9s, K8s, K7s, K6s, K5s, K4s, K3s, K2s, AQo, KQo, QQ, QJs, QTs, Q9s, Q8s, Q7s, Q6s, Q5s, Q4s, Q3s, Q2s, AJo, KJo, QJo, JJ, JTs, J9s, J8s, J7s, J6s, J5s, J4s, J3s, ATo, KTo, QTo, JTo, TT, T9s, T8s, T7s, T6s, T5s, T4s, A9o, K9o, Q9o, J9o, T9o, 99, 98s, 97s, 96s, 95s, A8o, K8o, Q8o, J8o, T8o, 98o, 88, 87s, 86s, 85s, A7o, K7o, 77, 76s, 75s, A6o, K6o, 66, 65s, 64s, A5o, 55, 54s, A4o, 44, A3o, 33, A2o, 22
- **Parciais:** 87o 30%, 74s 39%, 53s 89%

## BTN abre com 20bb (raise 2x ou all-in, 41,5%)

- **100%:** AA, AKs, AQs, AJs, ATs, A9s, A8s, A7s, A6s, A5s, A4s, A3s, A2s, AKo, KK, KQs, KJs, KTs, K9s, K8s, K7s, K6s, K5s, K4s, K3s, AQo, KQo, QQ, QJs, QTs, Q9s, Q8s, Q7s, Q6s, Q5s, Q4s, AJo, KJo, QJo, JJ, JTs, J9s, J8s, J7s, J6s, J5s, ATo, KTo, QTo, JTo, TT, T9s, T8s, T7s, T6s, A9o, K9o, Q9o, J9o, T9o, 99, 98s, 97s, A8o, K8o, 88, 87s, 86s, A7o, 77, 76s, A6o, 66, A5o, 55, A4o, 44, A3o, 33, 22
- **Parciais:** 96s 47%, Q8o 47%, J8o 27%, T8o 43%, 75s 72%, 65s 94%, A2o 50%

## BTN paga o open do CO (40bb; paga 15,1% e 3beta 9,8%)

- **100%:** AJs, ATs, A9s, A8s, A7s, A5s, KQs, KTs, K9s, QJs, QTs, JTs, T9s, 66, 55, 44, 33, 22
- **Parciais:** AQs 3%, A6s 77%, A4s 73%, A3s 43%, A2s 34%, KJs 83%, K8s 74%, K7s 37%, K6s 45%, AQo 78%, KQo 64%, Q9s 58%, Q8s 16%, AJo 56%, KJo 78%, QJo 53%, JJ 14%, J9s 90%, J8s 35%, ATo 63%, KTo 60%, QTo 30%, JTo 2%, TT 4%, T8s 79%, A9o 25%, 99 52%, 98s 98%, 88 78%, 87s 80%, 86s 23%, 77 64%, 76s 92%, 65s 21%, 54s 32%

## BTN paga o open do HJ (40bb; paga 12,9% e 3beta 9%)

- **100%:** AJs, ATs, A9s, KQs, KJs, KTs, QJs, QTs, JTs, 66, 55, 44, 33, 22
- **Parciais:** A8s 81%, A7s 66%, A6s 43%, A5s 79%, A4s 87%, A3s 81%, A2s 25%, K9s 61%, K8s 56%, K7s 21%, K6s 1%, AQo 87%, KQo 74%, Q9s 56%, Q8s 20%, AJo 45%, KJo 84%, QJo 18%, JJ 10%, J9s 85%, J8s 1%, ATo 57%, TT 14%, T9s 71%, T8s 60%, 99 60%, 98s 93%, 97s 14%, 88 66%, 87s 69%, 77 83%, 76s 83%, 65s 33%, 54s 8%

## BB paga o open do BTN (40bb; paga 61,4%, 3beta 13,3%, all-in 4,6%)

- **100%:** A9s, A8s, A7s, A6s, A5s, A4s, A3s, A2s, KTs, K9s, K8s, K6s, K5s, K4s, K3s, K2s, QJs, QTs, Q9s, Q8s, Q7s, Q6s, Q5s, Q4s, Q3s, Q2s, JTs, J9s, J8s, J7s, J6s, J5s, J4s, J3s, J2s, QTo, JTo, T9s, T8s, T7s, T6s, T5s, T4s, T3s, T2s, K9o, 98s, 97s, 96s, 95s, 94s, 93s, 92s, K8o, 87s, 86s, 85s, 84s, 83s, 82s, 87o, 76s, 75s, 74s, 73s, 72s, J6o, 76o, 65s, 64s, 63s, 62s, 75o, 65o, 54s, 53s, 52s, 64o, 54o, 43s, 42s, 53o, 32s, K2o
- **Parciais:** KJs 83%, K7s 28%, KQo 38%, KJo 67%, QJo 76%, ATo 18%, KTo 95%, A9o 54%, Q9o 97%, J9o 89%, T9o 95%, A8o 91%, Q8o 80%, J8o 84%, T8o 85%, 98o 90%, A7o 70%, K7o 70%, Q7o 94%, J7o 62%, T7o 81%, 97o 86%, A6o 89%, K6o 58%, Q6o 80%, T6o 75%, 96o 92%, 86o 93%, A5o 55%, K5o 76%, Q5o 84%, J5o 95%, A4o 86%, K4o 84%, Q4o 92%, J4o 45%, A3o 82%, K3o 80%, Q3o 77%, 43o 60%, A2o 65%, Q2o 73%, 22 21%

## BB aumenta contra o limp do SB (40bb, raise 3,5x, 44,1%)

- **100%:** AA, AKs, AQs, AJs, ATs, A9s, A8s, A7s, A6s, A5s, AKo, KK, KQs, KJs, KTs, AQo, KQo, QQ, QJs, AJo, JJ, JTs, ATo, TT, A9o, 99, 88, 77, 76s, 73s, 72s, 66, 65s, 64s, 62s, 55, 54s, 52s
- **Parciais:** A4s 5%, A3s 78%, A2s 92%, K9s 1%, K7s 53%, QTs 9%, Q9s 37%, Q8s 71%, Q7s 47%, Q6s 23%, Q2s 15%, KJo 77%, QJo 53%, J8s 8%, J7s 2%, KTo 45%, QTo 35%, JTo 13%, K9o 55%, Q9o 19%, J9o 39%, T9o 21%, 92s 12%, A8o 94%, K8o 75%, Q8o 9%, J8o 24%, T8o 35%, 98o 6%, 87s 55%, 83s 1%, 82s 99%, A7o 54%, K7o 10%, Q7o 9%, J7o 58%, T7o 69%, 97o 61%, 87o 9%, 75s 57%, A6o 8%, Q6o 1%, J6o 23%, T6o 54%, 96o 69%, 86o 49%, 76o 14%, 63s 81%, Q5o 25%, J5o 34%, T5o 46%, 95o 50%, 85o 54%, 75o 41%, 65o 39%, 53s 99%, K4o 8%, Q4o 55%, J4o 45%, T4o 76%, 94o 66%, 84o 86%, 74o 32%, 64o 10%, 54o 2%, 44 5%, 43s 6%, 42s 84%, K3o 38%, Q3o 69%, J3o 62%, T3o 55%, 93o 62%, 83o 67%, 73o 28%, 63o 34%, 53o 17%, 43o 14%, 32s 8%, K2o 33%, Q2o 66%, J2o 68%, T2o 56%, 92o 50%, 82o 26%, 72o 54%, 62o 55%, 52o 20%, 42o 10%, 32o 86%

---

# Notas

- Os ranges mudam com o stack, a estrutura e o ante. Se o site for atualizado, releia antes de mudar o treino.
