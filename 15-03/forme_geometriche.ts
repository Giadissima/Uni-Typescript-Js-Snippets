interface FormaGeometrica{
  
}

class Triangolo implements FormaGeometrica{
  private _base: number = 0;
  private _altezza: number = 0;
  constructor(base: number, altezza: number){
    this.base = base
    this.altezza = altezza
  }
  
  public set base(newBase : number) {
    this._base = newBase;
  }
  public set altezza(newAltezza : number) {
    this._altezza = newAltezza;
  }

    /**
     * Getter base
     * @return {number }
     */
	public get base(): number  {
		return this._base;
	}

    /**
     * Getter altezza
     * @return {number }
     */
	public get altezza(): number  {
		return this._altezza;
	}
  public area = () => (this.base * this.altezza)/2
  public perimetro = () => ((this.base*2) + (this.altezza*2))/ 2
}

class Cerchio implements FormaGeometrica{
  private _raggio: number = 0;
  constructor(raggio: number){
    this.raggio = raggio
  }  
  
  public set raggio(newRaggio : number) {
    this._raggio = newRaggio;
  }

    /**
     * Getter raggio
     * @return {number }
     */
	public get raggio(): number  {
		return this._raggio;
	}
  public area = () => Math.pow(this.raggio, 2) * Math.PI
  public perimetro = () => this.raggio * 2 * Math.PI
} 


class Rettangolo implements FormaGeometrica{
  private _base: number = 0;
  private _altezza: number = 0;
  
  constructor(base: number, altezza: number){
    this.base = base;
    this.altezza = altezza;
  }  
  /**
   * Getter base
   * @return {number }
   */
  public get base(): number  {
  return this._base;
  }
  /**
   * Getter altezza
   * @return {number }
   */
  public get altezza(): number  {
    return this._altezza;
  }
  public set base(newBase : number) {
    this._base = newBase;
  }
  public set altezza(newAltezza : number) {
    this._altezza = newAltezza;
  }

  public area = () => this.base * this.altezza
  public perimetro = () => (this.base*2) + (this.altezza*2)
  
} 

class Quadrato extends Rettangolo{
  constructor(lato: number){
    super(lato, lato)
  }
}

function mediaPerimetroRettangoli(forme: FormaGeometrica[]){
  let sommaR = 0;
  let trovati = 0;
  for(let i = 0; i < forme.length; i++)
    if(forme[i] instanceof Rettangolo){
      let rettangolo: Rettangolo = forme[i] as Rettangolo;
      sommaR += rettangolo.perimetro()
      trovati ++;
      
    }
  if (trovati != 0)
    return sommaR/trovati
  return 0;
}

let q = new Quadrato(12);
let t = new Triangolo(2, 4);
let r = new Rettangolo(4,6);
let r2 = new Rettangolo(5,5);
let c = new Cerchio(2);

// console.log(q.area(), q.perimetro())
// console.log(r.area(), r.perimetro())
// console.log(c.area(), c.perimetro())
// console.log(t.area(), t.perimetro())
console.log(mediaPerimetroRettangoli([r, r2]));
