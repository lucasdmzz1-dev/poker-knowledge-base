# Estudos de ranges

Estudos de ranges de abertura (RFI) lidos no solver do 4BET Trainer, separados por situação.

## Organização

Cada situação tem sua pasta, com um README próprio, um arquivo por árvore lida e os dados para análise:

    <formato>/rfi/<posicao>/<stack-do-hero>bb/      formato = vanilla ou pko
      README.md          filtros usados, leituras e conclusões da situação
      arvores/           um arquivo por árvore (#id)
      dados/arvores.json um registro por árvore, no padrão do dicionário

Vanilla e PKO ficam em pastas separadas e nunca se misturam: Vanilla não tem bounty; PKO grava o bounty de cada assento, o KOI e o fator progressivo.

Padrão e coleta (valem para todas as situações):
- [dicionario-arvores-rfi.md](dicionario-arvores-rfi.md): campos de cada árvore (torneio, stacks de todos os assentos, RP, totais, classes e grade).
- [playbook-coleta-rfi.md](playbook-coleta-rfi.md): como ler uma árvore no 4BET Trainer, script da grade e checklist.

Uma situação só fica completa quando a árvore registra o stack de todas as posições (UTG, UTG1, MP, LJ, HJ, CO, BTN, SB, BB), porque o range do BTN depende deles.

## Situações

Vanilla:
- [RFI BTN 15bb](vanilla/rfi/btn/15bb/README.md) (em andamento)

PKO:
- nenhuma ainda
