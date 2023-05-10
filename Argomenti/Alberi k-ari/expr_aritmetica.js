//Immaginiamo un albero in cui i nodi intermedi sono operatori (aritmetici) e le foglie sono operandi (numerici)
// Si scriva una funzione che, dato un albero così fatto, restituisca il valore dell’espressione rappresentata dall’albero
let T = {
  val: "**",
  sx: {
    val: "*",
    sx: { val: 4 },
    dx: {
      val: "+",
      sx: {
        val: "*",
        sx: { val: 5 },
        dx: { val: 4 }
      },
      dx: { val: 3 }
    }
  },
  dx: { val: 2 }
}

function parse_tree(T) {
  // operazione non corretta
  if (T == undefined || T.val == undefined) return NaN;
  
  if (typeof T.val === 'number') return Number(T.val);
  else switch (T.val) {
    case "**":
      return parse_tree(T.sx) ** parse_tree(T.dx)
    case "+":
      return parse_tree(T.sx) + parse_tree(T.dx)
    case "-":
      return parse_tree(T.sx) - parse_tree(T.dx)
    case "*":
      return parse_tree(T.sx) * parse_tree(T.dx)
    case "/":
      return parse_tree(T.sx) / parse_tree(T.dx)
    case "%":
      return parse_tree(T.sx) % parse_tree(T.dx)
    default:
      throw new Error("mi dispiace questo operatore non l'abbiamo implementato")
  }
}

console.log(parse_tree(T));