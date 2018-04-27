var numbers = {
  array: [3, 5, 10],
  getNumbers: () => {
    console.log(this)
    return this.array
  }
}
// Create a bound function
var boundGetNumbers = numbers.getNumbers.bind(numbers)
console.log(boundGetNumbers()) // => [3, 5, 10]
// Extract method from object
var simpleGetNumbers = numbers.getNumbers
console.log(simpleGetNumbers()) // => undefined or throws an error in strict mode
