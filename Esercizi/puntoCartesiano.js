const { setTextRange } = require("typescript");

/*
Si scriva una classe PuntoCartesiano che rappresenti un punto geometrico in coordinate
cartesiane (x, y). Oltre a un costruttore, serviranno i metodi seguenti:
• p.dist(q) restituisce la distanza euclidea fra i punti p e q
• p.translate(q) sposta il punto p, traslandolo di q
• p.zero()- sposta il punto p alle coordinate (0,0) */
class PuntoCartesiano {
  #x = 5;
  #y;
  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  //methods
  dist(q){
    if(q !== undefined && q instanceof PuntoCartesiano)
      return Math.sqrt(Math.pow((this.x - q.x),2) + Math.pow((this.y - q.y),2))
    return NaN;
  }
  translate(q){
    if(q !== undefined && q instanceof PuntoCartesiano){
      this.x += q.x;
      this.y += q.y;
    }
  }
  zero(){
    this.x = 0;
    this.y = 0;
  }
  //getters and setters
  get x(){return this.#x}
  set x(newX){this.#x = newX};
  get y(){return this.#y}
  set y(newy){this.#y = newy};
}

p = new PuntoCartesiano(3,4);
q = new PuntoCartesiano(5,5);
p.translate(q)
console.log(p.x, p.y);