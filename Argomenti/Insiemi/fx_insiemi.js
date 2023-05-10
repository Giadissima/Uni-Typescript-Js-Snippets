A = { mele: 1, pere: 1, banane: 1, ciliegie: 1, ananas: 1, kiwi: 1, uva: 1 }

//inserimento
A["fragole"] = 1

// eliminazione
delete (A["mele"]);

//ESERCIZIO 4 - Funzione che prende come parametri due insiemi a e b, e controlla se l'insieme a è sottoinsieme di b
function contains(a, b) {
  for (frutto in a)
    if (!(frutto in b)) return false;
  return true;
}


B = { pere: 1, ciliegie: 1 }
console.log(contains(B, A));

//ESERCIZIO 5 - Funzione che controlla se due insiemi sono identici
let obj_equals = (a, b) => contains(a, b) && contains(b, a);

//ESERCIZIO 6 - Funzione che restituisce l'intersezione di 2 insiemi
function intersezione(a, b){
  let both = {}
  for(frutto in a)
    if (frutto in b) both[frutto] = 1;
  return both;
}
console.log(intersezione(B, A));

//ESERCIZIO 7 - Funzione che restituisce l'unione di 2 insiemi
function unione(a, b){
  let both = {}
  for(frutto in a)
    both[frutto] = 1;
  for(frutto in b)
    both[frutto] = 1;
  return both;
}

console.log(unione(B, A));
