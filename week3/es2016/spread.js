// REST PARAMETERS
// Everything except the first parameter is in the array bravo
const callMe = (alpha, ...bravo) => `${alpha}: ${bravo.length}`
console.log(callMe('Sukmi', 'Nathan', 'Kinsey', 'Christian', 'the Sloth'))

// DESTRUCTURING
// Note that the keys 'a' and 'c' are pulled out of the object
const destructure = ({ a, c }) => `${a} ${c}`
console.log(destructure({
  a: 'bravo',
  c: 'delta',
  e: 'foxtrot',
  g: 'bravo',
  h: 'delta',
  i: 'foxtrot'
}))

// SPREAD OPERATOR, WITH AN ARRAY
// Note that the first array is unchanged!
const firstArray = ['Tanya', 'Amanda', '@ericmbudd']
const secondArray = [...firstArray, 'Kelly']
console.log(secondArray);
console.log(firstArray);

// SPREAD OPERATOR, WITH AN OBJECT
// Note that the first object is unchanged!
const firstObj = {
  whiskey: 'whiskey',
  tango: 'tango',
  foxtrot: 'foxtrot'
}
const secondObj = {...firstObj, foxtrot: 'fudge sundae'}
console.log(secondObj)
console.log(firstObj)

// ARGUMENTS
// Inside a normal function, the arguments keyword is an array of all
// parameters even though they do not have names.
function theAwesome(...rest) {
  console.log('theAwesome');
  console.log(`${rest[0]}  |  ${rest[1]}`);
  console.log(rest[1]);
  return `${arguments[0]} | ${arguments.length} | ${arguments[1].nathan}`
}

console.log(theAwesome('Nathan', {sukmi: 'favorite object', nathan: 'kjkljlkj'}))

function theAwesome2(first, ...rest) {
  console.log(first, rest);
}
theAwesome2('Nathan', {sukmi: 'favorite object', nathan: 'kjkljlkj'});
theAwesome2('Nathan', {sukmi: 'favorite object', nathan: 'kjkljlkj'}, {sukmi: 'favorite object', nathan: 'kjkljlkj'});
