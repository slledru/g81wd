function literal(id, name) {
  const result = {}
  result[id] = { id, name }
  return result
}

function literal2(id, name) {
  return {
    [id]: { id, name }
  }
}

console.log(literal(1, 'name'))

function copyAndAppendComputed(object, propertyName, value) {
  const result = Object.assign({}, object)
  result[propertyName] = value
  return result
}

function copyAndAppendComputed2(object, propertyName, value) {
  return {
    ...object,
    [propertyName]: value
  }
}

console.log(copyAndAppendComputed({ id: 1}, 'new_prop', 'new value'))
console.log(copyAndAppendComputed2({ id: 1}, 'new_prop', 'new value'))
