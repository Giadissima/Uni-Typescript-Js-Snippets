// Left-View” di un albero binario: stampare per ogni livello il nodo più a sinistra

let T = {};
T.val=7;
T.sx={val: 4, sx: {val: 3}, dx: {val:-1, sx: {val: 4, dx:{val:3}, sx:{val: 8}}}}
T.dx={val: 11, dx: {val: 1}, sx: {val:9, sx: {val: 20}}}

//restituisce un array di nodi con aggiunto il lv
function parse_tree(bt, h=0) {
  if(bt == undefined || bt.val == undefined) return;
  // caso foglia
  if (bt.sx == undefined && bt.sx == undefined) return {val: bt.val, h: h}
  let res_arr = []

  let res_sx = parse_tree(bt.sx, h++);
  if (res_sx !== undefined) res_arr.push(res_sx)
  else{
    let res_dx = parse_tree(bt.dx, h++);
    if (res_dx !== undefined) res_arr.push(res_dx)
  }

  return res_arr;
}

console.log(parse_tree(T))