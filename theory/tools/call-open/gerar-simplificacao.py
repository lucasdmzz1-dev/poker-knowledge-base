# Gera simplificacao-btn.html a partir de dados/call-open-btn-grades.json.
# Uso (na raiz do repositório):
#   python -I theory/tools/call-open/gerar-simplificacao.py
# Método: cada cenário recebe um nível pela % total que o BTN continua (call + 3bet + all-in): nível 1 (< 20%),
# 2 (20 a 25%) e 3 (25% ou mais). Por mão, guarda a média de continuar em cada nível e a parte de 3bet.
# Os 3 pontos que preveem o nível (fundo, open >= 25%, RP <= 0) saíram de busca por combinações: acertam 18 de 24.
import json, os

aqui = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(aqui, "dados", "call-open-btn-grades.json"), encoding="utf-8") as f:
    d = json.load(f)
M, C = d["maos"], d["cenarios"]
W = [6 if len(h) == 2 else 4 if h[2:] == "s" else 12 for h in M]

def tot(c):
    return sum((a + b + e) * w for a, b, e, w in zip(c["call"], c["raise"], c["allin"], W)) / 1326

def nivel(t):
    return 1 if t < 20 else 2 if t < 25 else 3

grupos = {1: [], 2: [], 3: []}
for c in C:
    grupos[nivel(tot(c))].append(c)

maos = []
for i, h in enumerate(M):
    f = []
    for L in (1, 2, 3):
        g = grupos[L]
        f.append(round(sum(c["call"][i] + c["raise"][i] + c["allin"][i] for c in g) / len(g)))
    cont = sum(c["call"][i] + c["raise"][i] + c["allin"][i] for c in C)
    tb = sum(c["raise"][i] + c["allin"][i] for c in C)
    maos.append([h, f[0], f[1], f[2], round(100 * tb / cont) if cont else 0])

saida = {"maos": maos, "n": {L: len(g) for L, g in grupos.items()}, "total": len(C)}
with open(os.path.join(aqui, "simplificacao-btn.template.html"), encoding="utf-8") as f:
    html = f.read()
html = html.replace("/*DADOS*/null", json.dumps(saida, ensure_ascii=False, separators=(",", ":")))
with open(os.path.join(aqui, "simplificacao-btn.html"), "w", encoding="utf-8") as f:
    f.write(html)
print({L: len(g) for L, g in grupos.items()})
