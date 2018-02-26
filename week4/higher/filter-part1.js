const _ = require('lodash')

const first = _.range(0, 14)
const odds = first.filter((x) => x % 2 === 1)
const odds2 = _.range(0, 14).filter((x) => x % 2 === 1)

// console.log(first)
// console.log(odds)
console.log(odds2)

const moreOddz = []
for (let i = 0; i < 14; i++) {
  if (i % 2 === 1) {
    moreOddz.push(i)
  }
}
console.log(moreOddz)
