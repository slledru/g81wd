function combine(a) {
  return function (b) {
    return [a, b]
  }
}

const combine2 = (a) => (b)  => [a, b]

console.log(combine(1)(2))
console.log(combine2(1)(2))

function createProject(name) {
  return { name }
}

const createProject2 = (name) => ({ name })

console.log(createProject('new project'))
console.log(createProject2('new project'))
