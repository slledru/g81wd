let result = [1, 2, 3].map(num => num * 2)
console.log(result);

result = [1, 2, 3, 4].map((num, index) => num * 2 + index)
console.log(result);

result = [1, 2, 3, 4].map(num => {
  const multiplier = 2 + num
  return num * multiplier
})
console.log(result);

result = [1, 2, 3, 4].map((num, index) => {
  var multiplier = 2 + index
  return num * multiplier
})
console.log(result);

//result = [1, 2, 3].map(n => { number: n })
//                            ^^ might be intepreted as a start of a block
result = [1, 2, 3].map(n => ({ number: n }))
console.log(result);
result = [1, 2, 3].map(n => {
  return { number: n }
})
console.log(result);

//result = [1, 2, 3].map(n => { number: n, something: 'else' })
//                            ^^ might be intepreted as a start of a block
result = [1, 2, 3].map(n => ({ number: n, something: 'else' }))
console.log(result);
result = [1, 2, 3].map(n => {
  return { number: n, something: 'else' }
})
console.log(result);

function Timer () {
  this.seconds = 0
  setInterval(() => this.seconds++, 1000)
}
var timer = new Timer()
setTimeout(() => console.log(timer.seconds), 3100)
