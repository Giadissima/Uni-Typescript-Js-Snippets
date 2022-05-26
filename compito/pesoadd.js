const pesoAdd = (n) => {
  n = String(n)
  let volte = 0;
  // il numero in stringa permette di accederci come fosse un array
  while(n.length !== 1){
    let somma = 0;
    // somma delle cifre in n
    for(let i = 0; i < n.length; i+= 1){
      somma += Number(n[i])
    }
    // sostituisco n con la somma
    n = String(somma)
    volte++;
  }

  return volte;
}