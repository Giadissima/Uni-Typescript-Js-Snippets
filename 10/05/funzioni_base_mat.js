// Esempi:
// f : ℝ→ℝ, f(x) = x2
// f : ℝ×ℝ→ℝ, f(x,y)=x+y
// f : ℕ→{0,1}, f(x) = 1 se x è pari, 0 se x è dispari 
// ecc.

const pow = (x) => x*x;
const sum = (x, y) => x+y;
const even = (x) => {if (x%2 == 0) return 1; return 0}