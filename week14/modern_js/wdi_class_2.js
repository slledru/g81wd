class WdiClass2 {
  constructor(name) {
    this.name = name
    this.students = []
  }

  getName = () => this.name

  addStudent = (name) => this.students = [ ...this.students, name ]

  toString = () => `Name: ${this.name}  Students: ${this.students}`
}

const wdi = new WdiClass2('g81')
console.log(wdi)
console.log(wdi.getName())
wdi.addStudent('Cali')
console.log(wdi)
console.log(wdi.toString())
