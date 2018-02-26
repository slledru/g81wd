const _ = require('lodash')

// function callFunctionMultipleTimes(cb, count) {
//   return function() {
//     _.range(count).forEach(() => cb())
//   }
// }

const callFunctionMultipleTimes = (cb, count) => () => _.range(count).forEach(() => cb())

function runMe() {
  console.log('I was ran!!!')
}

const run3Times = callFunctionMultipleTimes(runMe, 3)

run3Times()
