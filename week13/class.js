class Car {
  constructor() {
    this.miles = 0
  }

  drive(miles) {
    this.miles += miles
  }

  report() {
    return `The car has driven ${this.miles} miles`
  }
}

const myCar = new Car()
myCar.drive(10)
myCar.drive(3)
console.log(myCar.report())

class Clock {
  constructor() {
    this.seconds = 0
  }

  tick() {
    this.seconds++
    console.log(`in tick: this.seconds === ${this.seconds}`)
  }
}

class Clock2 {
  constructor() {
    this.tick = () => {
      this.seconds++
      console.log(`in tick2: this.seconds = ${this.seconds}`)
    }
    this.seconds = 0
  }
}

const clock = new Clock()
const clock2 = new Clock2()

setTimeout(clock.tick, 1000)
setTimeout(clock2.tick, 1000)
