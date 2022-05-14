// Tagliare da un albero tutti i rami che iniziano da un nodo con valore dato
let T = {};
T.val=7;
T.sx={val: 4, sx: {val: 3}, dx: {val:-1, sx: {val: 4, dx:{val:3}, sx:{val: 8}}}}
T.dx={val: 11, dx: {val: 1}, sx: {val:9, sx: {val: 20}}}

let k = 11
function cut_branches_bt(node, k){
  if(node == undefined || node.val == undefined) return undefined;
  if(node.val == k){
    node.sx = undefined;
    node.dx = undefined;
  } else{
    cut_branches_bt(node.sx, k);
    cut_branches_bt(node.dx, k);
  }
  return node;
}

console.log(cut_branches_bt(T, k));