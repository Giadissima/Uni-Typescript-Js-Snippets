// Dire se un albero contiene un valore cercato o no
let T = {};
T.val=7;
T.sx={val: 4, sx: {val: 3}, dx: {val:-1, sx: {val: 4, dx:{val:3}, sx:{val: 8}}}}
T.dx={val: 11, dx: {val: 1}, sx: {val:9, sx: {val: 20}}}

let k = -20
function search_binary_tree(node, k){
  if(node == undefined || node.val == undefined) return false;
  return (node.val == k) || search_binary_tree(node.sx, k) || search_binary_tree(node.dx, k)
}

 console.log(search_binary_tree(T, k));