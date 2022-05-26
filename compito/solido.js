// classe considerata come abstract perché i metodi sono vuori e va fatto l'overload
class Solido{
  constructor(){}
  volume(){}
  superficie(){}
}

class Parallelepipedo extends Solido{
  #larghezza; 
  #altezza;
  #profondita;
  constructor(larghezza, altezza, profondita){
    super();
    if(larghezza == undefined || altezza == undefined || profondita == undefined) throw new UndefinedValuesError("devi inserire tutti i valori!");
    this.larghezza = larghezza;
    this.altezza = altezza;
    this.profondita = profondita;
  }
  // overload di superficie S = 2*(l+p)*h + 2*l*p;
  superficie(){
    return 2 * (this.larghezza + this.profondita) * this.altezza + 2 * this.larghezza * this.profondita;
  }
  // overload di volume V = l*p*h.
  volume(){
    return this.larghezza * this.profondita * this.altezza;
  }
  // getters anda setters
  get larghezza(){return this.#larghezza}
  set larghezza(newT){this.#larghezza = newT};
  get altezza(){return this.#altezza}
  set altezza(newT){this.#altezza = newT};
  get profondita(){return this.#profondita}
  set profondita(newT){this.#profondita = newT};
}

class Cubo extends Parallelepipedo{
  constructor(lato){
    super(lato, lato, lato);
  }
}
class Sfera extends Solido{
  #raggio;
  constructor(raggio){
    super();
    if(raggio == undefined) throw new UndefinedValuesError("devi inserire tutti i valori!");
    this.#raggio = raggio;
  }
  // overload di superficie S = 12.56*r^2
  superficie(){
    return 4 * Math.PI * Math.pow(this.raggio, 2);
  }
  // overload di volume V = 4.19*r^3.
  volume(){
    return 4.19 * Math.pow(this.raggio, 3);
  }
  // getters anda setters
  get raggio(){return this.#raggio}
  set raggio(newT){this.#raggio = newT};
}

function sommaSuperficiParallelepipedi (solidi) {
  somma = 0;
  solidi.forEach(element => {
    if(element instanceof Parallelepipedo) somma+= element.superficie()
  });
  return somma;
}

class UndefinedValuesError extends Error{} 

solidi = [];
solidi.push(new Parallelepipedo(1,2,3));
solidi.push(new Cubo(5));
solidi.push(new Sfera(2));
console.log(sommaSuperficiParallelepipedi(solidi))