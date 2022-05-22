type cbool = true | 1 | false | 0;

interface ArrFilterObj<T> {
  yes: T[];
  no: T[];
}
function setaccio<T>(a: T[], f: (e: T) => cbool) {
  let obj: ArrFilterObj<T> = { yes: [], no: [] };
  a.forEach((el) => {
    if (f(el)) obj.yes.push(el);
    else obj.no.push(el);
  });
  return obj;
}

console.log( setaccio([3, 4, 1, 19], (e) => e % 2 == 1));
function _pred(e:number):cbool { return e%2?0:1 }
console.log(setaccio([3,4,1,19],_pred));
console.log(setaccio(["pippo","pluto","paperino"], e=>e.length>5));
