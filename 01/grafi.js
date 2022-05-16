// un grafo è un oggetto. N è un array di nodi e E è un array di archi
// {nodi: N, archi: E}

// un nodo è un oggetto con un campo valore
// const node = { val: 5 }

//rappresentiamo un arco come un oggetto con campo da e a
// let arco = { da: n, a: n }


// esempio
// nodi
const n1 = { val: 1 }, n2 = { val: 2 }, n3 = { val: 3 }, n4 = { val: 4 }, n5 = { val: 5 }
// archi
const a = { da: n1, a: n2 }, b = { da: n1, a: n3 }, c = { da: n3, a: n5 },
  d = { da: n3, a: n4 }, e = { da: n4, a: n5 }, f = { da: n5, a: n2 }
const G = { nodi: [n1, n2, n3, n4, n5], archi: [a, b, c, d, e, f] }

function nodoGradoMassimo(G){
  let nodo_max;
  let grado_max = 0;
  for (let n of G.nodi){
    let current_grade = 0;/
    for(let e of G.archi){
      if(e.da == n) current_grade ++;
      if(e.a == n) current_grade ++;
    }
    if(current_grade > grado_max){
      nodo_max = n;
      grado_max = current_grade;
    }
  }
  return nodo_max;
}

console.log(nodoGradoMassimo(G));