// (Media) Si scriva un programma che legga da tastiera 10 interi e stampi la media aritmetica di 
///tutti i valori diversi da zero e di segno uguale all’ultimo valore della sequenza.

// (Minimo) Si scriva un programma che legga da tastiera 10 interi e stampi il valore minimo.
// Calcolo del minimo/massimo tra un set di valori
// Iterando e mantenendo il minimo/massimo corrente

// PROMPT
const prompt = require('prompt-sync')();
const N_INPUT = 5;

// MEDIA ARITMETICA
let sommaP = 0;
let sommaN = 0;
let n_mediaP = 0;
let n_mediaN = 0;
let mediaP;
let mediaN;

// MINIMO
let minimo = +Infinity;
// MASSIMO
let massimo = -Infinity;

for (let i = 0; i < N_INPUT; i++) {
  const input = Number(prompt("\ninserisci un numero: "));
  // se il prompt è corretto esegue le operazioni di media e min max, altrimenti da un tentativo in più all'utente
  if(!isNaN(input)){
    // media negativa
    if(input < 0){
      sommaN += input;
      n_mediaN ++;  
    } else{ // media positiva
      sommaP += input;
      n_mediaP ++;
    }

    // min max
    if (minimo > input) minimo = input;
    if (massimo < input) massimo = input;
  }else i--;
}

//todo
if(n_mediaN != 0){

}
mediaN = n_mediaN == 0 ? 0 : sommaN/n_mediaN;
mediaP = n_mediaP == 0 ? 0 : sommaP/n_mediaP;

console.log("\nmedia negativa: ", mediaN);
console.log("media positiva: ", mediaP);
console.log("minimo: ", minimo);
console.log("massimo: ", massimo);