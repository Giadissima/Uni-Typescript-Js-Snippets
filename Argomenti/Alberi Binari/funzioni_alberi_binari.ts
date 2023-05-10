import { idText } from "typescript";

// albero binario di ricerca generico
class NodoABR<T>{
  public v: T;
  public left: NodoABR<T> | null;
  public right: NodoABR<T> | null;
  constructor(v: T){
    this.v = v;
    this.left = null;
    this.right = null;
  }
}

class ABR<T>{
  root: NodoABR<T>;
  constructor(v: T){
    this.root = new NodoABR<T>(v);
  }

  search(k: T, node: NodoABR<T> | null = this.root): NodoABR<T> | null{
    // siamo nella root
    if(node === null || node.v === k) return node;
    // caso in cui dobbiamo cercare nel ramo destro
    if(node.v < k) 
      return this.search(k, node.right);
    // caso in cui dobbiamo cercare nel ramo sinistro
    return this.search(k, node.left);
  }
  insert(node_to_insert: NodoABR<T>, start: NodoABR<T> = this.root){
    if(start === null) return;
    if(start.v == node_to_insert.v) return;
    if(start.v < node_to_insert.v){
      if(start.right === null) start.right = node_to_insert;
      else this.insert(node_to_insert, start.right);
    } else{
      if(start.left === null) start.left = node_to_insert;
      else this.insert(node_to_insert, start.left);
    }
  }
  searchMin(start: NodoABR<T> = this.root): T | null{
    if(start === null) return null;
    if(start.left !== null) return this.searchMin(start.left)
    return start.v;
  }
  searchMax(start: NodoABR<T> = this.root): T | null{
    if(start === null) return null;
    if(start.right !== null) return this.searchMax(start.right)
    return start.v;
  }
  printOrd(start: NodoABR<T> = this.root){
    if(start.left !== null) this.printOrd(start.left)
    console.log(start.v)
    if(start.right !== null) this.printOrd(start.right)
  }
}
var alb = new ABR<number>(5); 
// alb.insert(21)
var z = new NodoABR<number>(21);
alb.insert(z);
alb.insert(new NodoABR<number>(42));
alb.insert(new NodoABR<number>(1));
alb.insert(new NodoABR<number>(-1));
alb.insert(new NodoABR<number>(22));
console.log("Min: ", alb.searchMin());
console.log("Max: ", alb.searchMax());
alb.printOrd(alb.root);