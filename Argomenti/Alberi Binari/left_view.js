// Left-View” di un albero binario: stampare per ogni livello il nodo più a sinistra

let T = {};
T.val=7;
T.sx={val: 4, sx: {val: 3}, dx: {val:-1, sx: {val: 4, dx:{val:3}, sx:{val: 8}}}}
T.dx={val: 11, dx: {val: 1}, sx: {val:9, sx: {val: 20}}}

function stampa(T){
  let arr_nodi = [];
  let max = -Infinity;

  function parse_tree(node, h=0) {
    // denota la profondità dell'albero
    if(Math.max(max, h) == h) max = h;

    if(node !== undefined || node.val !== undefined)
      arr_nodi.push({val: node.val, h: h})
    if(node.sx !== undefined) parse_tree(node.sx, h+1)
    if(node.dx !== undefined) parse_tree(node.dx, h+1)
  }
  parse_tree(T);
  //skippa i doppioni
  for (let i= 0; i<=max; i++){
    for(let j = 0; j< arr_nodi.length; j++){
      if(arr_nodi[j].h == i) {
        console.log(arr_nodi[j].val);
        break;
      }
    }
  }
}

stampa(T)