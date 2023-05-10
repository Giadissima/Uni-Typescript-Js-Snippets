/*Implementare la classe sotto definita che realizza oggetti di tipo polinomio. 
Gli oggetti di questo tipo devono prevedere una chiave "coef" che è un array contenente 
di coefficienti del polinomio, con il grado più alto in coda all'array, 
es. [1,0,3] => 3*x**2 + 1. La classe definisce anche una chiave "degree" che memorizza 
il grado del polinomio. 

Si dia un'implementazione per il costruttore (che prende come argomento l'array dei coefficienti 
con cui inizializzare l'oggetto) e per i metodi sotto elencati:
 print() -> Scrive il polinomio in HTML (usando la funzione console.poly)
 toString() -> Stampa a console i coefficienti
 eval(x) -> Valuta il polinomio con i valori di x forniti in input
 sum(p) -> Restituisce un nuovo polinomio risultante dalla somma dell'oggetto con il polinomio p passato come argomento
 trim() -> Ripulisce l'array dei coefficienti da eventuali 0 presenti in coda all'array: es. [1,2,3,0] non è un polinomio di terzo grado ma di secondo, perchè l'ultimo coefficiente è 0. Quindi l'array dei coefficienti va semplificato a [1,2,3].
 derivative() -> Restituisce un nuovo polinomio corrispondente alla derivata del poliniomio oggetto.
*/


class Polinomio {
  constructor(coef) {
    this.coef = coef;
    this.degree = coef.length - 1
  }
  print() {
    return poly(this.coef)
  }
  toString() {
    console.log(this.coef);
  }
  // sostituisce un numero a x
  eval(x) {
    let val = 0;
    for (let i = 0; i < this.coef.length; i++) {
      val += (this.coef[i] * (x ** i))
    }
    return val;
  }
  sum(p) {
    let i = 0;
    let newp = []
    while (i < this.coef.length && i < p.coef.length) {
      newp.push(this.coef[i] + p.coef[i]);
      i++;
    }
    while (i < this.coef.length) {
      newp.push(this.coef[i]);
      i++;
    }
    while (i < p.coef.length) {
      newp.push(this.p.coef[i]);
      i++;
    }
    return newp;
  }
  trim() {
    let l = this.coef.length;
    while(this.coef[l-1] == 0){
      this.coef.pop();
      l--;
    }
  }
}

function poly(p) {
  var t = ""
  if (p.length > 1)
    t += `${p[p.length - 1] != 1 ? p[p.length - 1] : "{}"}x^${p.length - 1 == 1 ? "{}" : ("{" + (p.length - 1) + "}")}`
  for (var e = p.length - 2; e > 0; e--)
    if (p[e]) t += `+${p[e] != 1 ? p[e] : "{}"}x^${e == 1 ? "{}" : ("{" + e + "}")}`
  if (p[0])
    t += `+${p[0]}`
  return t
}


let p = new Polinomio([1,2,3])

let p2 = new Polinomio([4,5])
console.log("p.print", p.print());
console.log("p.sum", p.sum(p2));
let p3 = new Polinomio([2,5,0,0])
console.log("p3 to string");
p3.toString()
p3.trim();
console.log("p3 to string");
p3.toString();
console.log(p2.eval(2));


