// Scambiare fra di loro i rami destro e sinistro della radice
let T = {};
T.val=7;
T.sx={val: 4, sx: {val: 3}, dx: {val:-1, sx: {val: 4, dx:{val:3}, sx:{val: 8}}}}
T.dx={val: 11, dx: {val: 1}, sx: {val:9, sx: {val: 20}}}

function swap_branches_bt(bt){
  if(bt == undefined || bt.val == undefined) return undefined;
  let temp = bt.sx;
  bt.sx = bt.dx;
  bt.dx = temp;
  return bt
}

 console.log(swap_branches_bt(T));