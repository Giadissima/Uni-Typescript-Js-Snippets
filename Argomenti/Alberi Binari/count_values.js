// Contare quanti sono i nodi di un albero che hanno un valore dato
let T = {};
T.val=7;
T.sx={val: 4, sx: {val: 3}, dx: {val:-1, sx: {val: 4, dx:{val:3}, sx:{val: 8}}}}
T.dx={val: 11, dx: {val: 1}, sx: {val:9, sx: {val: 20}}}

let k = 4
function count_values_bt(node, k){
  if(node == undefined || node.val == undefined) return 0;
  return (node.val == k ? 1:0) + count_values_bt(node.sx, k) + count_values_bt(node.dx, k)
}

 console.log(count_values_bt(T, k));