
class Matrix {
  public A: number[][] = [];
  public r: number;
  public c: number;
  constructor(r: number, c: number) {
    this.r = r;
    this.c = c;
    for (let i = 0; i < r; i++) {
      this.A[i] = []
      for (let j = 0; j < c; j++) {
        this.A[i][j] = 0;
      }
    }
  }
  setValue(i: number, j: number, value: number) { this.A[i][j] = value }
  getValue(i: number, j: number) { 
    if (this.A[i][j] == undefined) 
      throw new Error("index errati"); 
    return this.A[i][j] 
  }
  is_square() { return this.r == this.c }
  setZero() { this.A.forEach(riga => riga.map(el => 0))}
  to_string(): string{
    let s = `rxc = ${this.r}x${this.c}\n`
    for(let i = 0; i < this.r;i++){
      s+= `${i}: `
      for(let j = 0; j < this.c; j++){
        s += String(this.A[i][j]) + ' ' 
      }
      s += '\n';
    }
    return s
  }
}

let M = new Matrix(2,6);
M.setValue(1,2, 7);
M.setValue(1,5, 2);
M.setValue(0,3, 4);
console.log(M.getValue(1,2))
console.log(M.to_string())
console.log(M.is_square());

class ANode<T>{
  public content: T;
  public id: number = -1;
  constructor(c:T) {
    this.content = c;
  }
}

class Graph<T> extends Matrix{
	constructor(c: T) {
    super(1,1);
    let n = new ANode(c);
  }

  addNode(c: T){
    let n = new ANode(c);
    
  }

}