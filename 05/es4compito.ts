class NonCantaError extends Error{}

class Eurovision{
  public cantanti: any[] = [];
  public semi1_is_called: boolean = false;
  public cantanti_semi1: any[] = [];
  public last_semi1_size: number = 0;
  iscrivi(c: any){
    if(c.canta == undefined || typeof c.canta !== 'function') throw new NonCantaError("Errore, non è un cantante")
    this.cantanti.push(c);
  }
  semifinale(n: 1|2):any[] | undefined{
    let semifinale: any[] = []
    shuffleArray(this.cantanti);
    if(n== 1) {
      this.semi1_is_called = true;
      const n_cantanti: number = Math.round(this.cantanti.length/2)
      semifinale = this.cantanti.slice(0, n_cantanti);
      this.cantanti_semi1 = semifinale;
      this.last_semi1_size = this.cantanti.length
    } else{
      if(this.last_semi1_size !== this.cantanti.length/2) {
        this.semi1_is_called = false;
        this.cantanti_semi1 = []
        return;
      } 
      for(let el of this.cantanti){
        let i = 0;
        while(i < this.cantanti_semi1.length && el !== this.cantanti_semi1[i]) i++
        if(i == this.cantanti_semi1.length) semifinale.push(el)
      }
      this.semi1_is_called = false;
      this.cantanti_semi1 = []
    }
    return semifinale;

  }
}

function shuffleArray<T>(array: T[]) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}


let cantore={ ciao: "a", canta: ()=>console.log("sooool") }
let cantore2={ b: "b", canta: ()=>console.log("sooool") }
let cantore3={ c: "c", canta: ()=>console.log("sooool") }
let cane={ canta: false }
let sam={ suona: "piano" }
let e=new Eurovision()


e.iscrivi(cantore)
e.iscrivi(cantore2)
e.iscrivi(cantore3)
// e.iscrivi(cane)
console.log(e.semifinale(1))
console.log(e.semifinale(1))
e.iscrivi(cantore)
console.log(e.cantanti.length)
console.log(e.semifinale(2)) // caso in cui è stato iscritta una persona dopo che sono state sorteggiati le prime semifinali, ritorna undefined