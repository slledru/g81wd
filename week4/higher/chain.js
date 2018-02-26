const _ = require('lodash')

// sum of the odd squares
//
// [0, 1, 2, 3, 4, 5] (range 6)
//
//  [1, 3, 5]
//
//  [1, 9, 25] (square them)
//
//  35 (sum them)
const alpha = _.range(6)
const bravo = alpha.filter((x) => x % 2 === 1)
const delta = bravo.map((x) => Math.pow(x, 2))
const charlie = delta.reduce((last, x) => last + x)

console.log(alpha)
console.log(bravo)
console.log(delta)
console.log(charlie)

const result = _.range(6)
  .filter((x) => x % 2 === 1)
  .map((x) => Math.pow(x, 2))
  .reduce((last, x) => last + x)
console.log(result)
