// Scope.js

let fileScope = 'Can be accessed anywhere in the file'

function doSomething() {
  const localScope = 'Can only be accessed inside this function'
  fileScope = 'Can be accessed in the function too!'
}
// doSomething()

// This will result in an error because the variable does not exist
// outside the function.
// Yeah yeah I'm at the end of then I get a hair

localScope = 'Try and change me here'

console.log(localScope)
