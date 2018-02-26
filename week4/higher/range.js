const _ = require('lodash')

const arr = [0, 1, 2, 3, 4]

const arrMap1 = arr.map((x) => Math.sqrt(x))

const arrMap2 = _.range(5).map((x) => Math.sqrt(x))

console.log(arrMap1)
console.log(arrMap2)
