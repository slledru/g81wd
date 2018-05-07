class WdiClass {
  constructor(name) {
    this.name = name
    this.students = []
  }

  getName() {
    return this.name
  }

  addStudent(name) {
    this.students = [ ...this.students, name]
  }

  toString() {
    return `Name: ${this.name}  Students: ${this.students}`
  }
}

const wdi = new WdiClass('g81')
console.log(wdi)
console.log(wdi.getName())
wdi.addStudent('Cali')
console.log(wdi)
console.log(wdi.toString())
