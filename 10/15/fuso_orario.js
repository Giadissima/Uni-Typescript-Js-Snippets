// [FusoOrario] Scrivere (e testare) una funzione Javascript che, dato un oggetto 
// che rappresenta un orario in termini di hh, mm e ss, modifica hh secondo applicando 
// fuso orario (positivo o negativo) fornito in input

let orario = {"hh":22, "mm": 13, "ss": 40};
let fuso = -23;

function apply_fuso_orario(orario, fuso) {
  orario.hh = Math.abs((orario.hh + fuso) % 24);
  return orario;
}

console.log(apply_fuso_orario(orario, fuso));