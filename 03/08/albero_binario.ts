// albero binario di ricerca generico
class NodoABR<T>{
  public v: T;
  public left: T | null;
  public right: T | null;
  constructor(v: T, left: NodoABR<T>, right: NodoABR<T>){
    this.v = v;
    this.left = null;
    this.right = null;
  }
}

class ABR<T>{
  root: NodoABR<T>;
  constructor(node: NodoABR<T>){
    this.root = node;
  }

  search(){

  }
  insert(){

  }
  searchMin(){

  }
  searchMax(){
    
  }
  printOrd(){
    
  }
}