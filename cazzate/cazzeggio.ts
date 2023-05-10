enum Risposta{
  sì,
  no
  
}

let risposteDiMatteo: Risposta[] = [Risposta.sì, Risposta.sì]

for (let risposta of risposteDiMatteo){
  if (risposta == Risposta.sì) {
    console.log("GG");
    
  } else console.log("GIADA SAD NOISES");
  
}