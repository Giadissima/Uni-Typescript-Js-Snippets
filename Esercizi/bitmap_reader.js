//Programma che legge una bitmap 8×8 e restituisce un array di 8 interi a 8 bit che la codifica
let bit_map = [0, 0, 0, 1, 1, 0, 0, 0, 
               0, 0, 1, 0, 0, 1, 0, 0,
               0, 0, 1, 0, 0, 1, 0, 0,
               0, 0, 1, 0, 0, 0, 0, 0,
               0, 1, 1, 1, 1, 1, 1, 0,
               0, 1, 1, 1, 0, 1, 1, 0,
               0, 1, 1, 1, 0, 1, 1, 0,
               0, 0, 1, 1, 1, 1, 0, 0,]


function codify_bitmap(bit_map, height, width){
  let coded = [];
  // scorro lungo l'altezza dell'array
  for (let i = 0; i < bit_map.length; i+=height){
    let str = ""
    for (let j = 0; j < width; j++){
      str += String(bit_map[i+j])
    }
    // print bitmap to screen
    console.log(str);
    coded.push(parseInt(str, 2))
  }
  return coded
}

console.log(codify_bitmap(bit_map, 8, 8))