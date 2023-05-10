/*Implementare la classe sotto definita che realizza una struttura dati coda 
di dimensione massima definita. Gli oggetti di tipo CodaLimitata devono 
prevedere una chiave "arr" che corrisponde all'array utilizzato per 
implementare la coda e una chiave "max" che rappresenta la dimensione 
massima della coda. Il costruttore prende un unico parametro che definisce 
la dimensione massima della coda (e deve ovviamente inizializzare tutte le chiavi).

La classe implementa i metodi
enqueue(item) -> inserisce l'elemento item nella coda. Se raggiunta la dimensione massima, 
si fa spazio al nuovo elemento in accordo con la politica di priorità della coda
dequeue() -> estrae dalla coda
peek() -> restituisce l'elemento in testa senza estrazione
len()-> restituisce il numero di elementi nella coda
*/
class CodaLimitata{
  constructor(size){
    this.arr = [];
    this.max = size;
  }
  enqueue(item){
    this.arr.push(item);
    if(this.arr.length > this.max) return this.arr.shift()
  }

  dequeue(){ return this.arr.shift()}
  peek(){ if(this.arr.length > 0) return this.arr[0]
          return undefined}
  len(){ return this.arr.length}
}

let coda = new CodaLimitata(2)
console.log(coda.peek());
coda.enqueue("ciao");
console.log(coda.peek());
coda.enqueue("a");
coda.enqueue("tutti");
console.log(coda.arr)
coda.enqueue("!");
console.log(coda.arr)
console.log(coda.len())
console.log(coda.dequeue());
console.log(coda.dequeue());
console.log(coda.dequeue());
console.log(coda.dequeue());


console.log(coda);

class Test{
  arr = []
  constructor(max){
    this.max = max;
  }
}

t = new Test
console.log(t)