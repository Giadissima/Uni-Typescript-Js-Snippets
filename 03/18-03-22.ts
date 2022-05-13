class ALNode{
 index: number;
 next: ALNode | null;

 constructor (index: number){
   this.index = index
   this.next = null
 }
}

class GNode<T> {
  content: T;
  alist: ALNode | null;

  constructor(content: T){
    this.content = content
    this.alist = null
  }
}


class Graph<T>{
  nodes: GNode<T>[];

  constructor(content: T){
    let n: GNode<T> = new GNode(content)
    this.nodes = [n]
  }

  addNode(content:T) {
    var n: GNode<T> = new GNode (content);
    this.nodes.push(n);
    return n;
  }

  addOrientedEdge(index1:number, index2: number){
    let aln: ALNode = new ALNode(index2)
    // inserimento in testa
    let head: ALNode | null = this.nodes[index1].alist;
    this.nodes[index1].alist = aln;
    aln.next = head
  }

  toString(): string{
    var s: string = ""
    for(let i = 0; i < this.nodes.length; i++){
      let n = this.nodes[i];
      s += n.content
    }
    return s;
  }
}
