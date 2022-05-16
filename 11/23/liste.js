// gli array possono essere acceduti come se fossero liste

a = [1, 6, 2, 6, 1, 2, 4, 7];
let [t, ...resto] = a;
// console.log(t, resto);

let empty_list = []
let [t1, ...resto1] = empty_list;
// console.log(t1, resto1);

function sum(list) {
  let [t, ...resto] = list;
  return t === undefined ? 0 : t + sum(resto);
}

// console.log(sum(a), sum(empty_list));

function max(list) {
  let [t, ...resto] = list;
  return t === undefined ? -Infinity : Math.max(t, max(resto));
}
// console.log(max(a), max(empty_list));

function len(list) {
  let [t, ...resto] = list;
  return t === undefined ? 0 : 1 + len(resto);
}
console.log(len(a), len(empty_list));
