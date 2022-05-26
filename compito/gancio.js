
// Si scriva una funzione gancio(a), con a un array di numeri, che 
// restituisca un oggetto avente, nell'ordine, quattro proprietà: 
// num, il cui valore è il numero di ganci totali presenti in a; asc, il cui 
// valore è il numero di ganci ascendenti presenti in a; des, il numero di ganci 
// discendenti presenti in a; gan, un array contenente tutte le sequenze che sono 
// ganci, nell'ordine in cui compaiono in a.


function gancio(a) {
  return {
    num: ganciTot(a),
    asc: ganciAsc(a),
    des: ganciDisc(a),
    gan: ganciSeq(a)
  }
}

// faccio una funzioncina per ogni cosa anche se potrei metterlo insieme per maggiore flessibilità nel caso si dovesse implementare una sola funzione di gancio oppure renderla un modulo 
const ganciTot = (a)=> {
  let numGanci = 0;
  for(let i in a){
    i = Number(i)
    let ind = i + 2
    if(a.length > ind){
      if (a[i] == a[ind] && a[i+1] !== a[i]) numGanci++;
    }
  }
  return numGanci;
}
// asc, il cui 
// valore è il numero di ganci ascendenti presenti in a;
const ganciAsc = (a)=> {
  let numGanci = 0;
  for(let i in a){
    i = Number(i)
    let ind = i + 2
    if(a.length > ind){
      if ((a[i] == a[ind]) && (a[i+1] > a[i])) numGanci++;
    }
  }
  return numGanci;
}

const ganciDisc = (a)=> {
  let numGanci = 0;
  for(let i in a){
    i = Number(i)
    let ind = i + 2
    if(a.length > ind){
      if ((a[i] == a[ind]) && (a[i+1] < a[i])) numGanci++;
    }
  }
  return numGanci;
}

//gan, un array contenente tutte le sequenze che sono 
// ganci, nell'ordine in cui compaiono in a.
const ganciSeq = (a)=> {
  let ganci = []
  for(let i in a){
    i = Number(i)
    let ind = i + 2
    if(a.length > ind){
      if (a[i] == a[ind] && a[i+1] !== a[i]) {
        let arr = [];
        arr.push(a[i], a[i+1], a[ind]);
        ganci.push(arr)
      }
    }
  }
  return ganci;
}

let a =  [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2];
console.log(gancio(a))