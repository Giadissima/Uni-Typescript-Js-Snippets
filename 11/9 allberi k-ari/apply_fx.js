// Applicare una funzione data a tutti i valori contenuti in un albero, sostituendo in ogni nodo il valore attuale 
// con il risultato della funzione applicata al valore attuale
let T = {}
T.val=12
T.figli=[
  {val: 8, figli: [{val: 4}, {val: 14}, {val: 2, figli:[{val:6}]}]},
  {val: 3, figli: [
    {val: 10, figli: [
      {val: 6, figli: [{val: 1}, {val: 5}, {val: 9, figli: [{val:1}]}] },
      {val: 13},
      {val: 6, figli: [{val: 7, figli: [{val: 1},{val: 16}]}]},
    ]}
  ]}, 
  {val: 14}, 
  {val: 2, figli:[{val:6}]},
  {val: 8},
  {val: 1, figli: [{val: 1}]}
]

function apply_fx_to_tree(node, f){
  // caso in cui i nodi non siano stati passati correttamente
  if(node == undefined || node.val == undefined) return;
  // caso in cui siamo arrivati a una foglia: caso base della funzione
  if(node.figli == undefined || node.figli.length == 0) {
    node.val = f(node.val)
    return node;
  }
  
  // caso iterativo: itero i figli e svolgo la funzione
  for (figlio of node.figli)
    figlio = apply_fx_to_tree(figlio, f);
  node.val = f(node.val)    
  return node;
}

let f = (x)=>x*2;
console.log(apply_fx_to_tree(T, f));