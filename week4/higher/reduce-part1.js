const _ = require('lodash')

// [1, 2, 3, 4, 5]
const result = _.range(1, 6).reduce((last, x) => last + x, 0)

console.log(result)

function reduceMe(last, x) {
  const innerResult = last + x
  console.log(`innerResult=${innerResult}   last=${last}   x=${x}`)
  return innerResult
}

const result2 = _.range(1, 6).reduce(reduceMe, 0)

console.log(`!!! ${result2}`)
//
// const n = 5
// console.log(n * (n + 1) / 2)
