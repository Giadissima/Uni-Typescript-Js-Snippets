// sx e dx, che riferiscono rispettivamente al figlio sinistro e al figlio destro del nodo stesso; 
// val e piccolo, due valori interi. Le proprietà sx e dx sono opzionali.


// Si scriva in TS una funzione contaMin(T) che, dato un albero binario T come argomento, calcoli per ogni nodo t in T (inclusa la radice) il minimo dei val memorizzati nel sotto-albero di cui t è radice (t incluso).
//  Questo minimo deve essere scritto in piccolo. La funzione restituisce il valore piccolo della radice di T.

interface Node{
  sx: Node | undefined,
  dx: Node | undefined,
  piccolo: number,
  val: number
}
// al posto del tipo any ci andrebbe il tipo nodo, però l'editor non implementa l'interfaccia che ho creato perciò ci ho lasciato any, fate conto che ci sia l'interface Node
function contaMin(T:any): number {
  // caso base: siamo arrivati a una foglia oppure il nodo è in formato errato
  if(T == undefined) return + Infinity
  if(T.val == undefined && T.piccolo !== undefined) {
    T.piccolo = + Infinity;
    return T.piccolo
  }
  // caso di ricorsione in cui viene chiamato il contaMin
  T.piccolo = Math.min(contaMin(T.sx), contaMin(T.dx), T.val)
  return T.piccolo
}
