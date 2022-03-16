// * DILEMMA DEL PRIGIONIERO
enum Azioni{
  Confessa,
  NonConfessa
}

function prisonerDilemma(a1:Azioni, a2: Azioni): [Number, Number] {
  // ? CASE: Confessa, Confessa
  if(a1 == Azioni.Confessa && a2 == Azioni.Confessa)
    return [-3, -3]
  // ? CASE: Confessa, NonConfessa
  if(a1 == Azioni.Confessa && a2 == Azioni.NonConfessa)
    return [0,-6]
  // ? CASE: NonConfessa, Confessa
  if(a1 == Azioni.NonConfessa && a2 == Azioni.Confessa)
    return [-6,0]
  // ? CASE: NonConfessa, NonConfessa 
  return [-1,-1]
}
console.log(prisonerDilemma(Azioni.NonConfessa, Azioni.NonConfessa))