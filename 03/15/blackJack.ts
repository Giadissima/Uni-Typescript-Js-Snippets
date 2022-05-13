// inizio definizione carte da gioco

enum Seme{
  Cuori, 
  Quadri,
  Mattoni,
  Picche
}

enum NomeCarta{
  Asso,
  Due,
  Tre,
  Quattro,
  Cinque,
  Sei,
  Sette,
  Jack,
  Regina,
  Re
}

type Carta = [Seme, NomeCarta]
// fine definizione carte da gioco


class BlackJack {
  // constants
  private readonly MAX_PUNTI_GIOCATORE = 21;
  private readonly MAX_PUNTI_BANCO = 17;
  // private variables
  private _finita = false;
  private _puntiGiocatore = 0;
  private _puntiBanco = 0;
  private _mazzo = new Mazzo()

  /**
   * pesca estrae una carta per il giocatore
   * @returns true se la partita è ancora in corso, false altrimenti
   */
  public pesca() {
    if(this._finita) throw new Error("La partita è già finita!")
    let cartaGiocatore: Carta| undefined =  this._mazzo.pesca();
    if(typeof cartaGiocatore == 'undefined'){
      this._finita = true;
    } else{
      if (cartaGiocatore[1] == NomeCarta.Asso) this.puntiGiocatore += 10
      else this.puntiGiocatore += cartaGiocatore[1]
      console.log(`punti giocatore: ${this.puntiGiocatore}, carta uscita: ${NomeCarta[cartaGiocatore[1]]} di ${Seme[cartaGiocatore[0]]}`);
      
    }
    if(this._finita || this.puntiGiocatore > this.MAX_PUNTI_GIOCATORE) {
      this._finita = true
      return false
    }
    return true;
  }
  
  /**
   * concludi
   */
  public concludi() {
    if(this._finita) throw new Error("La partita è già finita!")
    let cartaEstratta = this._mazzo.pesca()
    while(cartaEstratta != undefined && (this._puntiBanco + cartaEstratta![1]) < this.MAX_PUNTI_BANCO){
      this._puntiBanco += cartaEstratta![1]
      cartaEstratta = this._mazzo.pesca()
    }

    if(cartaEstratta == undefined){
      if(this.puntiGiocatore > this._puntiBanco) return true;
      return false;
    } else{
      this._puntiBanco += cartaEstratta[1]
      if(this.puntiGiocatore > this._puntiBanco) return true;
      return false;
    }
  }

  // GETTER AND SETTER
  public set puntiGiocatore(v : number) {
    this._puntiGiocatore = v;
  }
  
  public get puntiGiocatore() : number {
    return this._puntiGiocatore
  }
    
}

class Mazzo{
  private _giocabile: Carta[] = [];
  constructor(){
    this.reset()
    this.mescola()
  }

  // mescola il mazzo
  public mescola(){
    this._giocabile = shuffle<Carta>(this._giocabile)
  }

  // pesca una carta
  public pesca = ()=>this._giocabile.pop()

  // resetta il mazzo
  public reset(){
    this._giocabile = []
    for (let seme = 0; seme < Object.keys(Seme).length / 2; seme++) {
      for(let nome= 0; nome < Object.keys(NomeCarta).length / 2; nome++){
        this._giocabile.push([seme, nome])        
      }
    }
  }

    /**
     * Setter giocabile
     * @param {Carta[] } value
     */
	public set giocabile(value: Carta[] ) {
		this._giocabile = value;
	}

}

// funzione che permette di mercolare un array
function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// inizia una partita
let p1 = new BlackJack();
console.log(p1.pesca(), p1.pesca(), p1.concludi());

let p2 = new BlackJack();
console.log(p1.pesca(), p1.concludi());
