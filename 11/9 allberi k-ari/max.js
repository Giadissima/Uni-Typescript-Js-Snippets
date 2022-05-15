// Trovare il massimo fra i valori in un albero
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

function max_tree(node){
  // caso in cui i nodi non siano stati passati correttamente
  if(node == undefined || node.val == undefined) return -Infinity;
  // caso in cui siamo arrivati a una foglia: caso base della funzione
  if(node.figli == undefined || node.figli.length == 0) return node.val;
  
  // caso iterativo: itero i figli e svolgo la funzione
  let max = -Infinity;
  for (figlio of node.figli)
    max = Math.max(max_tree(figlio), max, node.val);
    
  return max;
}

 console.log(max_tree(T));