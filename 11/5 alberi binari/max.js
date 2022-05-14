// Trovare il massimo fra i valori in un albero
let T = {};
T.val=7;
T.sx={val: 4, sx: {val: 3}, dx: {val:-1, sx: {val: 4, dx:{val:3}, sx:{val: 8}}}}
T.dx={val: 11, dx: {val: 1}, sx: {val:9, sx: {val: 20}}}

function max_binary_tree(node){
  if(node == undefined || node.val == undefined) return -Infinity;
  
  return Math.max(max_binary_tree(node.sx), max_binary_tree(node.dx), node.val)
}

 console.log(max_binary_tree(T));