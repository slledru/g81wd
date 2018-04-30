function updateAge(object, age) {
  object.age = age
  return object
}

function updateAge2(object, age) {
  return {...object, age}
}

console.log(updateAge({ birthdate: '1/2/1999'}, 42))
console.log(updateAge2({ birthdate: '1/2/1999'}, 42))
