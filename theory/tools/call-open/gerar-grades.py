# Gera dados/call-open-btn-grades.json e grades-btn.html a partir de dados/grades-raw.txt.
# Uso (na raiz do repositório):
#   python -I theory/tools/call-open/gerar-grades.py
# grades-raw.txt: uma linha por árvore "#id call/raise/allin(total) código". Código: 169 mãos na ordem do solver
# (AA, AKs, AQs, ..., linha a linha), cada mão com 6 hex (call, raise, all-in em %); "." = mão 100% fold;
# "~n~" (n em base 36) = n mãos 100% fold seguidas. Fold = 100 - call - raise - all-in.
import json, os, re

aqui = os.path.dirname(os.path.abspath(__file__))
dados = os.path.join(aqui, "dados")
R = "AKQJT98765432"
MAOS = [(R[i] + R[i]) if i == j else (R[i] + R[j] + "s") if j > i else (R[j] + R[i] + "o")
        for i in range(13) for j in range(13)]

def decodifica(cod):
    maos, i = [], 0
    while i < len(cod):
        c = cod[i]
        if c == ".":
            maos.append((0, 0, 0)); i += 1
        elif c == "~":
            j = cod.index("~", i + 1)
            maos += [(0, 0, 0)] * int(cod[i + 1:j], 36); i = j + 1
        else:
            h = cod[i:i + 6]
            maos.append((int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16))); i += 6
    assert len(maos) == 169, len(maos)
    return maos

# metadados vindos dos JSONs de resumo (só o opener MP de cada árvore)
meta = {}
for nome in ("call-open-btn-vanilla.json", "call-open-btn-pko.json"):
    with open(os.path.join(dados, nome), encoding="utf-8") as f:
        for a in json.load(f)["arvores"]:
            for c in a["cenarios"]:
                if c["opener"] == "MP":
                    btn = a["stacks_bb"]["BTN"] if "stacks_bb" in a else a["jogadores"]["BTN"][0]
                    meta[a["arvore"]] = (a, c, btn)

cenarios = []
with open(os.path.join(dados, "grades-raw.txt"), encoding="utf-8") as f:
    for linha in f:
        if not linha.strip():
            continue
        id_, tot, cod = linha.split()
        a, c, btn = meta[id_]
        m = decodifica(cod)
        w = [6 if len(x) == 2 else 4 if x.endswith("s") else 12 for x in MAOS]
        calc = [round(sum(wi * mi[k] for wi, mi in zip(w, m)) / 1326, 1) for k in range(3)]
        assert abs(calc[0] - c["call"]) <= 0.2 and abs(calc[1] - c["raise"]) <= 0.2, (id_, calc, c)
        cenarios.append({
            "arvore": id_, "tipo": "PKO" if a["tipo"].startswith("Bounty") else "Vanilla", "fase": a["fase"],
            "faixa": "médio" if btn < 45 else "fundo", "btn_bb": btn,
            "opener": "MP", "opener_bb": c["opener_bb"], "open_pct": c["open_pct"],
            "relacao": c["relacao"], "rp": c["rp_btn_vs_opener"],
            "resumo": {"fold": c["fold"], "call": c["call"], "raise": c["raise"], "allin": c.get("allin", 0) or 0},
            "call": [x[0] for x in m], "raise": [x[1] for x in m], "allin": [x[2] for x in m],
        })

saida = {
    "_nota": "Grades 13x13 do BTN contra 1 open do MP (open de 2bb), solver do 4BET Trainer (HRC Library), lidas em "
             "03/11/2026. Cada mão: % de call, 3bet (raise) e all-in; fold = 100 - soma. Ordem das mãos = ordem do "
             "solver (AA, AKs, AQs, ..., linha a linha). Conferidas contra os totais de call-open-btn-*.json (média "
             "ponderada por combos, tolerância 0,2).",
    "maos": MAOS, "cenarios": cenarios,
}
with open(os.path.join(dados, "call-open-btn-grades.json"), "w", encoding="utf-8") as f:
    json.dump(saida, f, ensure_ascii=False, separators=(",", ":"))

with open(os.path.join(aqui, "grades-btn.template.html"), encoding="utf-8") as f:
    html = f.read()
html = html.replace("/*DADOS*/null", json.dumps(saida, ensure_ascii=False, separators=(",", ":")))
with open(os.path.join(aqui, "grades-btn.html"), "w", encoding="utf-8") as f:
    f.write(html)
print(len(cenarios), "cenários")
