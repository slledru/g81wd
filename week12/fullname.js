// Write the fullName() function here

const people = [
  { firstName: 'Ivette', lastName: 'Imler' },
  { firstName: 'Dionne', lastName: 'Darosa' },
  { firstName: 'Lekisha', lastName: 'Lemaster' },
  { firstName: 'Marry', lastName: 'Munson' },
  { firstName: 'Krystina', lastName: 'Keegan' },
  { firstName: 'Donnell', lastName: 'Dart' },
  { firstName: 'Carry', lastName: 'Chewning' },
  { firstName: 'Cecila', lastName: 'Constante' },
  { firstName: 'Lavera', lastName: 'Larocque' },
  { firstName: 'Annett', lastName: 'Ardon' }
]

const names = people.map(fullName)

function fullName(person) {
  return `${person.firstName} ${person.lastName}`
}

console.log(names)
