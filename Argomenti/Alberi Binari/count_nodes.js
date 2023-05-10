// Contare quanti sono i nodi di un albero
let T = {};
T.val=7;
T.sx={val: 4, sx: {val: 3}, dx: {val:-1, sx: {val: 4, dx:{val:3}, sx:{val: 8}}}}
T.dx={val: 11, dx: {val: 1}, sx: {val:9, sx: {val: 20}}}

function count_nodes_bt(node){
  if(node == undefined || node.val == undefined) return 0;
  return 1 + count_nodes_bt(node.sx) + count_nodes_bt(node.dx)
}

 console.log(count_nodes_bt(T));