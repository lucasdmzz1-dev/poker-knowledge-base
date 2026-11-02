// Prints do mês guardados no próprio navegador (IndexedDB), porque imagens não cabem no localStorage.
const BANCO = "pkb-prints"
const TABELA = "prints"

export interface Print {
  id: string
  mes: string
  nome: string
  blob: Blob
}

function abrir(): Promise<IDBDatabase> {
  return new Promise((ok, falha) => {
    const r = indexedDB.open(BANCO, 1)
    r.onupgradeneeded = () => {
      const t = r.result.createObjectStore(TABELA, { keyPath: "id" })
      t.createIndex("mes", "mes")
    }
    r.onsuccess = () => ok(r.result)
    r.onerror = () => falha(r.error)
  })
}

function pedido<T>(req: IDBRequest<T>): Promise<T> {
  return new Promise((ok, falha) => {
    req.onsuccess = () => ok(req.result)
    req.onerror = () => falha(req.error)
  })
}

export async function listarPrints(mes: string): Promise<Print[]> {
  const db = await abrir()
  const lista = await pedido(
    db.transaction(TABELA).objectStore(TABELA).index("mes").getAll(mes)
  )
  db.close()
  return (lista as Print[]).sort((a, b) => a.id.localeCompare(b.id))
}

export async function adicionarPrint(
  mes: string,
  arquivo: File
): Promise<void> {
  const db = await abrir()
  const id = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`
  await pedido(
    db
      .transaction(TABELA, "readwrite")
      .objectStore(TABELA)
      .put({ id, mes, nome: arquivo.name, blob: arquivo })
  )
  db.close()
}

export async function removerPrint(id: string): Promise<void> {
  const db = await abrir()
  await pedido(
    db.transaction(TABELA, "readwrite").objectStore(TABELA).delete(id)
  )
  db.close()
}
