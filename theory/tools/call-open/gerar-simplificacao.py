# Gera simplificacao-btn.html a partir de dados/call-open-btn-grades.json.
# Uso (na raiz do repositório):
#   python -I theory/tools/call-open/gerar-simplificacao.py
# Método: separa Vanilla e PKO e, em cada um, BTN médio (menos de 45bb) e deep. No PKO deep há ainda o grupo
# "RP até -2% ou opener de 35% ou mais" (5 dos 6 cenários). Por mão e por grupo guarda a média, o mínimo e o
# máximo de continuar (call + 3bet + all-in) entre as árvores do grupo e a parte de 3bet.
import json, os

aqui = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(aqui, "dados", "call-open-btn-grades.json"), encoding="utf-8") as f:
    d = json.load(f)
M, C = d["maos"], d["cenarios"]
W = [6 if len(h) == 2 else 4 if h[2:] == "s" else 12 for h in M]

def tot(c):
    return sum((a + b + e) * w for a, b, e, w in zip(c["call"], c["raise"], c["allin"], W)) / 1326

G = {
    "Vm": [c for c in C if c["tipo"] == "Vanilla" and c["faixa"] == "médio"],
    "Vf": [c for c in C if c["tipo"] == "Vanilla" and c["faixa"] == "deep"],
    "Pm": [c for c in C if c["tipo"] == "PKO" and c["faixa"] == "médio"],
    "Pf": [c for c in C if c["tipo"] == "PKO" and c["faixa"] == "deep"],
}
G["Px"] = [c for c in G["Pf"] if c["rp"] <= -2 or c["open_pct"] >= 35]

saida = {"maos": M, "g": {}}
for k, cs in G.items():
    t = [tot(c) for c in cs]
    hs = []
    for i in range(169):
        v = [c["call"][i] + c["raise"][i] + c["allin"][i] for c in cs]
        tb = sum(c["raise"][i] + c["allin"][i] for c in cs)
        hs.append([round(sum(v) / len(v)), min(v), max(v), round(100 * tb / sum(v)) if sum(v) else 0])
    saida["g"][k] = {"n": len(cs), "tot": [round(min(t)), round(sum(t) / len(t)), round(max(t))], "h": hs,
                     "arv": [c["arvore"] + ("@" + c["opener"] if c["opener"] != "MP" else "") for c in cs]}
with open(os.path.join(aqui, "simplificacao-btn.template.html"), encoding="utf-8") as f:
    html = f.read()
html = html.replace("/*DADOS*/null", json.dumps(saida, ensure_ascii=False, separators=(",", ":")))
with open(os.path.join(aqui, "simplificacao-btn.html"), "w", encoding="utf-8") as f:
    f.write(html)
print({k: (v["n"], v["tot"]) for k, v in saida["g"].items()})
