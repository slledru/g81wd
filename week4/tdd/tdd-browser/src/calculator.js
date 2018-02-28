const calc = {}

// calc.l2Norm = function(v) {
//   let sumOfSquares = 0;
//   for (let i = 0; i < v.length; i++) {
//     sumOfSquares += Math.pow(v[i], 2);
//   }
//   return Math.sqrt(sumOfSquares)
// }

calc.l2Norm = (v) => Math.sqrt(v.reduce((last, vi) => last + Math.pow(vi, 2), 0))
