// Pure Functions
// Get rid of a return and refactor one line one-liner to multi line one-liner
const objectLogger = (obj) => (
  Object.entries(obj)
    .map((kv) => `Key: ${kv[0]} Value: ${kv[1]}`)
)

const objItems = {
  uniform: 'smooth sippin whiskey',
  sierra: 'tango',
  echo: 'foxtrot'
}

// console.log(Object.entries(objItems))
// console.log(objectLogger(objItems))

// ARRAYS
// 1. Use concat, the immutable version of push
const original = [ 'whiskey', 'tango', 'foxtrot']
const originalPlusGolf = original.concat('golf') // mutable version of push()
// console.log(original)
// console.log(originalPlusGolf)

// ARRAYS
// 1.5: Edge case!  Mutable Value
const original2 = [{ mitch: 'tomato' }, 'tango', 'foxtrot']
const originalPlusGolf2 = original2.concat('golf') // mutable version of push()
// console.log(original2)
original2[0].mitch = 'blues'
// console.log(original2)
// console.log(originalPlusGolf2)

// ARRAYS
// 2. Use spread operator (append & prepend)
const alpha = ['one', 'two', 'three']
const bravo = [...alpha, 'four']
// console.log(alpha)
// console.log(bravo)

const charlie = ['one', 'two', 'three']
const delta = ['zero', ...charlie]
// console.log(charlie)
// console.log(delta)

// OBJECTS
// 1. Add a new key
const echo = { mitch: 'tomato', kelly: 'plum', christian: 'blue steel' }
const zoolander = { ...echo, derrick: 'magnum'}
// console.log(echo)
// console.log(zoolander)

// OBJECTS
// Destroy key with extreme prejudice
const foxtrot = { mitch: 'tomato', kelly: 'plum', christian: 'blue steel' }
const { christian, ...golf } = foxtrot
console.log(foxtrot)
console.log(golf)
