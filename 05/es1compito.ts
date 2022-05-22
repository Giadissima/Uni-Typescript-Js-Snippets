//Esercizio 1
// Si scriva una funzione JavaScript ack(p,q) 
// (con p e q numeri naturali) così definita: ack(p,q) è uguale a: 
//q+1 se p=0; 
//ack(p−1,1) se p>0 e q=0; 
//ack(p−1,ack(p,q−1)) altrimenti.

function ack(p:number, q: number):number {
  if(p==0) return q+1;
  if(p>0 && q==0) return ack(p-1, 1)
  return ack(p-1, ack(p, q-1))
}

console.log(ack(1,1)) // 3
console.log(ack(1,2)) // 4
console.log(ack(1,3)) // 5
console.log(ack(2,3)) // 9
console.log(ack(3,2)) // 29
console.log(ack(3,6)) // 509