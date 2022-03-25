// Si implementi una classe BocceNascoste che simuli una partita di bocce dove solo le distanze, 
// e non le posizioni, delle sfere sono visibili ai giocatori. Ad inizio gioco, la posizione delle sfere dei giocatori è
//   [Infinity, Infinity]. Ogni turno si compone prima di una mossa di Alpha, poi una mossa di Beta.

enum Giocatore{
  Alpha,
  Beta
}

type Posizione = [number, number]

class BocceNascoste {
  _boccia_alpha: Posizione = [-Infinity,-Infinity];
  _boccia_beta: Posizione = [-Infinity,-Infinity];
  _boccino: Posizione 
  _turno = Giocatore.Alpha
  constructor(pos_boccino: Posizione) {
    if(pos_boccino[0] < 0 || pos_boccino[1] < 0)  throw new PointError()
    this._boccino = pos_boccino
  }
  
  public posiziona(pos:Posizione, player: Giocatore) {
    if(pos[0] < 0 || pos[1] < 0)  throw new PointError()
    if(player == Giocatore.Alpha){
      if(this._turno !== Giocatore.Alpha) throw new PlayerError()
      this._boccia_alpha[0] = pos[0];
      this._boccia_alpha[1] = pos[1];
      this._turno = Giocatore.Beta
    } else{
      if(this._turno !== Giocatore.Beta) throw new PlayerError()
      this._boccia_beta[0] = pos[0];
      this._boccia_beta[1] = pos[1];
      this._turno = Giocatore.Alpha
    }
  }

  public vincitore() {
    const d1: number = distanzaEuclide(this._boccia_alpha, this._boccino)
    const d2: number = distanzaEuclide(this._boccia_beta, this._boccino)
    if(d1 > d2) return Giocatore.Alpha
    if(d2 > d1) return Giocatore.Beta
    return Giocatore.Alpha
  }

  public distanza(p1: Giocatore, p2?: Giocatore) {
    let b1: Posizione = [0,0];
    if(p1 == Giocatore.Alpha) b1 = this._boccia_alpha
    if(p1 == Giocatore.Beta) b1 = this._boccia_beta
    
    let b2: Posizione = [0,0];
    if(p2 == Giocatore.Alpha) b2 = this._boccia_alpha
    if(p2 == Giocatore.Beta) b2 = this._boccia_beta
    if(p2 == undefined) b2 = this._boccino

    return distanzaEuclide(b1, b2)
  }
}

function distanzaEuclide(p1:Posizione, p2:Posizione): number {
  const diffX = p1[0] - p2[0];
  const diffY = p1[1] - p2[1];
  return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2))
}

// ERRORS CLASSES
class PointError extends Error {
  constructor() {
      super("La posizione data del boccio è negativa");

      // Set the prototype explicitly.
      Object.setPrototypeOf(this, PointError.prototype);
  }
}

class PlayerError  extends Error {
  constructor() {
    super("Il turno del giocatore è errato");

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, PointError.prototype);
}
}
// inizio gioco
let partita1 = new BocceNascoste([12,4])
console.log(partita1.posiziona([3, 3], Giocatore.Alpha));
console.log(partita1.posiziona([4, 3], Giocatore.Beta));
console.log(partita1.vincitore());

