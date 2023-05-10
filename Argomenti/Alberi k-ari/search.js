// Dire se un albero contiene un valore cercato o no
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

let k = 1; 
function search(node, k){
  // caso in cui i nodi non siano stati passati correttamente
  if(node == undefined || node.val == undefined) return false;
  // caso in cui siamo arrivati a una foglia: caso base della funzione
  if(node.figli == undefined || node.figli.length == 0) return node.val == k;
  
  // caso iterativo: itero i figli e svolgo la funzione
  let founded = false;
  let i = 0;
  while (!founded && i<node.figli.length){
    founded = (node.val == k) || search(node.figli[i], k);
    i++;
  }
    
  return founded;
}

 console.log(search(T, k));