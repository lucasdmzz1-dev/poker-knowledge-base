"""Gera o índice de todas as árvores lidas (indice.csv e indice.md).

Percorre <acao>/<posicao>/<stack>bb/<formato>/<fase>/dados/arvores.json e junta
uma linha por árvore, com os campos que servem de filtro (como os botões do
4BET Trainer). Rodar da pasta estudos-de-ranges:

    python gerar-indice.py
"""
import csv
import json
from pathlib import Path

RAIZ = Path(__file__).resolve().parent
MESA_MIN = 8  # regra de mesa do playbook: só mesas de 8 ou 9 jogadores

COLUNAS = [
    "acao", "posicao", "stack", "formato", "fase", "id", "pct", "left", "paid",
    "campo_n0", "media", "hs", "sb", "bb", "n_mesa", "regra_mesa",
    "f", "r", "ai", "open", "caminho",
]


def linhas():
    for arq in sorted(RAIZ.glob("*/*/*/*/*/dados/arvores.json")):
        acao, posicao, stack, formato, fase = arq.relative_to(RAIZ).parts[:5]
        for x in json.loads(arq.read_text(encoding="utf-8")):
            seats = x.get("seats") or {}
            stk = lambda p: (seats.get(p)[0] if isinstance(seats.get(p), list) else seats.get(p))
            n = x.get("n_mesa") or sum(1 for p in seats if stk(p) is not None)
            f, r, ai = x.get("f"), x.get("r"), x.get("ai")
            yield {
                "acao": acao, "posicao": posicao, "stack": stack, "formato": formato, "fase": fase,
                "id": x.get("id"), "pct": x.get("pct"), "left": x.get("left"), "paid": x.get("paid"),
                "campo_n0": x.get("campo_n0"), "media": x.get("media"), "hs": x.get("hs"),
                "sb": stk("SB"), "bb": stk("BB"), "n_mesa": n,
                "regra_mesa": "ok" if n >= MESA_MIN else "fora (menos de 8)",
                "f": f, "r": r, "ai": ai,
                "open": round(100 - f, 1) if f is not None else None,
                "caminho": f"{acao}/{posicao}/{stack}/{formato}/{fase}/arvores/{str(x.get('id', '')).lstrip('#')}.md",
            }


def br(v):
    return "" if v is None else str(v).replace(".", ",")


def main():
    rows = list(linhas())
    with open(RAIZ / "indice.csv", "w", newline="", encoding="utf-8") as fh:
        w = csv.DictWriter(fh, fieldnames=COLUNAS)
        w.writeheader()
        w.writerows(rows)

    out = [
        "# Índice das árvores",
        "",
        "Gerado por `gerar-indice.py` a partir dos `dados/arvores.json`. Não editar à mão: rode o script de novo depois de gravar árvores. Para filtrar como nos botões do Trainer, abra `indice.csv` numa planilha.",
        "",
        "| Ação | Posição | Stack | Formato | Fase | Árvore | % restante | Média | BTN | SB | BB | Mesa | Fold | Raise | All-in | Open |",
        "|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|",
    ]
    for x in rows:
        mesa = f"{x['n_mesa']}" + ("" if x["regra_mesa"] == "ok" else " (fora)")
        out.append(
            f"| {x['acao']} | {x['posicao']} | {x['stack']} | {x['formato']} | {x['fase']} | "
            f"[{x['id']}]({x['caminho']}) | {br(x['pct'])}% | {br(x['media'])} | {br(x['hs'])} | "
            f"{br(x['sb'])} | {br(x['bb'])} | {mesa} | {br(x['f'])}% | {br(x['r'])}% | {br(x['ai'])}% | {br(x['open'])}% |"
        )
    out += ["", f"Total: {len(rows)} árvores. \"(fora)\" = mesa com menos de 8 jogadores, fora da regra de mesa do playbook.", ""]
    (RAIZ / "indice.md").write_text("\n".join(out), encoding="utf-8")
    print(f"{len(rows)} árvores no índice")


if __name__ == "__main__":
    main()
