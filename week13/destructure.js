const props = {
  firstName: 'Sue', lastName: 'Mary'
}

function test(properties) {
  return `Hello ${properties.firstName} ${properties.lastName}`
}

function test2({ firstName, lastName }) {
  return `Hello ${firstName} ${lastName}`
}

const test3 = ({ firstName, lastName }) => `Hello ${firstName} ${lastName}`

console.log(test(props))
console.log(test2(props))
console.log(test3(props))

const galvanize = {
  street: '1234 Walnut Street',
  city: 'Boulder',
  state: 'CO',
  zip: '80301'
}

function address(addressParts) {
  return `${addressParts.street}, ${addressParts.city}, ${addressParts.state} ${addressParts.zip}`
}

const address2 = ({ street, city, state, zip}) => `${street}, ${city}, ${state} ${zip}`

console.log(address(galvanize))
console.log(address2(galvanize))
