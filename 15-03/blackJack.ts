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

class BlackJack {
  public MAX_PUNTI = 21;
  private _finita = false;
  private _puntiGiocatore = 0;
  private _puntiBanco = 0;
  private _mazzo = new Mazzo()
  constructor() {
    
  }

  /**
   * pesca estrae una carta per il giocatore
   * @returns true se la partita è ancora in corso, false altrimenti
   */
  public pesca() {
    let cartaGiocatore: Carta| undefined =  this._mazzo.pesca();
    if(typeof cartaGiocatore == 'undefined'){
      this._finita = true;
    } else{
      if (cartaGiocatore[1] == NomeCarta.Asso) this.puntiGiocatore += 10
      else this.puntiGiocatore += cartaGiocatore[1]
    }
    if(this._finita || this.puntiGiocatore > 21) return false;
    return true;
  }
  
  /**
   * concludi
   */
  public concludi() {
    let cartaEstratta = this._mazzo.pesca()
    while(cartaEstratta != undefined || (this._puntiBanco + cartaEstratta![1]) > 17)
    // aggiungere
      cartaEstratta = this._mazzo.pesca()
    if(cartaEstratta == undefined){
      if()
    } else{
      this._puntiBanco += cartaEstratta[1]
    }
  }

  public set puntiGiocatore(v : number) {
    this._puntiGiocatore = v;
  }
  
}

class Mazzo{
  private _giocabile: Carta[] = [];
  constructor(){
    this.reset()
  }

  public mescola(){
    this.giocabile = (shuffle(this._giocabile))
  }

  public pesca = ()=>this.giocabile.pop()

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

function shuffle<T>(array: T[]) {
  return array.sort(() => Math.random() - 0.5);
}