const items = [1, 2, 3]

const clone = [
  ...items,
  4,
]

console.log('items', items)
console.log('clone', clone)

const items2 = [1, 2, 3]

const clone2 = [
  4,
  ...items2
]

console.log('items2', items2)
console.log('clone2', clone2)

const items3 = [1, 2, 3]

const index3 = items3.indexOf(2)

const clone3 = [
  ...items3.slice(0, index3),
  77,
  ...items3.slice(index3 + 1)
]

console.log('items3', items3)
console.log('clone3', clone3)
console.log('index3', index3)

const items4 = [1, 2, 3]

const clone4 = items4.filter(item => item !== 2)

console.log('items4', items4)
console.log('clone4', clone4)

// remove last
const items5 = [1, 2, 3]

const clone5 = items5.slice(0, -1)

console.log('items5', items5)
console.log('clone5', clone5)

// remove first
const items6 = [1, 2, 3]

const clone6 = items6.slice(1)

console.log('items6', items6)
console.log('clone6', clone6)

function addItem(array, item) {
  array.push(item)
  return array
}

function addItem2(array, item) {
  return [...array, item]
}

console.log(addItem([1, 2, 3], 5))
console.log(addItem2([1, 2, 3], 5))
