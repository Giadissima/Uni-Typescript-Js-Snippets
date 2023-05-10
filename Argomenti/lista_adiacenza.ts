class ALNode {
  public index: number;
  public next: ALNode | null
  constructor(index: number, next: ALNode | null) {
    this.index = index;
    this.next = next;
  }

}

class GNode<T>{
  public content: T;
  public list: ALNode | null = null;
  constructor(content: T, list?: ALNode) {
    this.content = content;
    if(list !== undefined) this.list = list;
  }
}

class Graph<T>{
  nodes: GNode<T>[];
  constructor (content: T){
    let n = new GNode(content)
    this.nodes = [new GNode(content)]
  }
  // Aggiunge un nuovo nodo al grafo (e lo restituisce)
  addNode(content: T): GNode<T>{
    const gn = new GNode(content);
    this.nodes.push(gn)
    return gn;
  }

  // Aggiunge un arco orientato (da indice nodo 1 a indice nodo 2)
  addOrientedEdge(index1: number, index2:number){
    // caso in cui gli indici non sono validi
    if(!this.isAnArch(index1) || !this.isAnArch(index2)) throw new Error("indici non validi");
    // aggiunge l'arco, evitando self-loop
    if(index1 == index2) return;
    // inserimento in testa alla lista di adiacenza
    const aln = new ALNode(index1, null);
    const tmp = this.nodes[index1].list;
    aln.next = tmp;
    this.nodes[index1].list = aln;
  }
  addUnorientedEdge(index1: number, index2:number){
    this.addOrientedEdge(index1, index2);
    this.addOrientedEdge(index2, index1);
  }
  isAnArch(index: number){ return index >= 0 && index < this.nodes.length}

  toString(){
    let s = "";
    for(let i = 0; i< this.nodes.length; i++){
      let n = this.nodes[i];
      s += n.content;
      let aln: ALNode|null = n.list
      while(aln != null) {
        s += " -> " + this.nodes[aln.index].content
        aln = aln.next
      }
      s += '/n'
    }
  }
}
// ESEMPI DI ESECUZIONE
let g = new Graph("r");
g.addNode("s");
g.addNode("t");
g.addNode("v");
g.addNode("w");
g.addNode("x");
g.addNode("y");
g.addNode("u");
g.addUnorientedEdge(0,1); // r--s
//g.addOrientedEdge(0,1); // r->s
g.addUnorientedEdge(0,3); // r--t
//g.addOrientedEdge(0,3); // r->t
g.addUnorientedEdge(1,4); // s--w
g.addUnorientedEdge(4,2); // w--t
g.addUnorientedEdge(4,5); // w--x
g.addUnorientedEdge(2,7); // t--u
g.addUnorientedEdge(5,6); // x--y
console.log(g.nodes[1].list);