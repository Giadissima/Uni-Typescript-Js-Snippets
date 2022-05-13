// Scrivere una funzione che somma di tutti gli elementi presenti in un array
let arr = [1, 20, 20, 10, 2, 3];

function sommatoria_arr(arr) {
  if(arr.length == 0) return 0;
  
  shifted = arr.shift();
  return shifted + sommatoria_arr(arr);
}

console.log(sommatoria_arr(arr))