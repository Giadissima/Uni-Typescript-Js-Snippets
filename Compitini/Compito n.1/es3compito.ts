class BadTreeError extends Error{}

class TNode<T>{
  public valore: T;
  public ethichetta: string;
  public figli: TNode<T>[] = [];
  constructor(v:T, e:string = ""){
    this.valore = v;
    this.ethichetta = e
  }

  add(...nodes: TNode<T>[]){
    this.figli = this.figli.concat(nodes);
  }
  *visit(): IterableIterator<T> {
    yield this.valore;
    for(let f of this.figli){
      yield * f.visit();
    }
  }
}

// Binary node
class BNode<T> extends TNode<T>{

  constructor(v:T, e:string = ""){
    super(v, e);
  }

  add(...nodes: BNode<T>[]){
    if(nodes.length + this.figli.length < 2) this.figli = this.figli.concat(nodes);
    else throw new BadTreeError("Questo nodo può avere solo due figli")
  }
}
// const   n0=new TNode(0,"radice"),
//         n1=new TNode(1,"sx"),
//         n11=new TNode(11),
//         n12=new TNode(12),
//         n2=new TNode(2,"centro"),
//         n3=new TNode(3,"dx"),
//         n31=new TNode(31),
//         n32=new TNode(32),
//         n33=new TNode(33),
//         n34=new TNode(34),
//         n341=new TNode(341,"nipotino")

// n0.add(n1,n2,n3)
// n1.add(n11,n12)
// n3.add(n31,n32,n33)
// n34.add(n341)
// n3.add(n34)


// console.log([...n0.visit()]);

// const   n0=new TNode(0,"radice"),
//         n1=new TNode(1,"sx"),
//         n11=new TNode(11),
//         n12=new TNode(12),
//         n2=new TNode(2,"centro"),
//         n3=new TNode(3,"dx"),
//         n31=new TNode(31),
//         n32=new TNode(32),
//         n33=new TNode(33),
//         n34=new TNode(34),
//         n341=new TNode(341,"nipotino")

// n0.add(n1,n2,n3)
// n1.add(n11,n12)
// n3.add(n31,n32,n33)
// n34.add(n341)
// n3.add(n34)

// var g=n0.visit()
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

const   n0=new TNode(0,"radice"),
        n1=new TNode(1,"sx"),
        n11=new TNode(11),
        n12=new TNode(12),
        n2=new TNode(2,"centro"),
        n3=new TNode(3,"dx"),
        n31=new TNode(31),
        n32=new TNode(32),
        n33=new TNode(33),
        n34=new TNode(34),
        n341=new TNode(341,"nipotino")

n0.add(n1,n2,n3)
n1.add(n11,n12)
n3.add(n31,n32,n33)
n34.add(n341)
n3.add(n34)

const b21=new BNode(21,"binario 1")
const b22=new BNode(22,"binario 2")
const b221=new TNode(221)
const b222=new BNode(222)
const b223=new TNode(223)

n2.add(b21,b22)
b22.add(b221)
b22.add(b222)

const rg=[...n0.visit()]
console.log(rg[7]) // 221)
console.log(rg[14]) // 341)
b22.add(b223)
// assert.equal(rg[14],341)

// assert.throws(()=>b22.add(b223),BadTreeError)
