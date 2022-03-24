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
    }
    if(this._finita || this.puntiGiocatore > this.MAX_PUNTI_GIOCATORE) return false;
    return true;
  }
  
  /**
   * concludi
   */
  public concludi() {
    if(this._finita) throw new Error("La partita è già finita!")
    let cartaEstratta = this._mazzo.pesca()
    while(cartaEstratta != undefined || (this._puntiBanco + cartaEstratta![1]) > this.MAX_PUNTI_BANCO){
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
  }

  // mescola il mazzo
  public mescola(){
    this.giocabile = (shuffle(this._giocabile))
  }

  // pesca una carta
  public pesca = ()=>this.giocabile.pop()

  // resetta il mazzo
  public reset(){
    for (let seme = 0; seme < Object.keys(Seme).length; seme++) {
      for(let nome= 0; nome < Object.keys(NomeCarta).length; nome++){
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
function shuffle<T>(array: T[]) {
  return array.sort(() => Math.random() - 0.5);
}