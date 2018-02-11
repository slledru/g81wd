// Function DEFINITION
// const sphereVol = function (r) {
//   return 4 * Math.PI * Math.pow(r, 3) / 3
// }

// Function DECLARATION
// function sphereVol(r) {
//   return 4 * Math.PI * Math.pow(r, 3) / 3
// }

// Arrow function, multiple lines.
// const sphereVol = (r) => {
//   return 4 * Math.PI * Math.pow(r, 3) / 3
// }

// Variables argument parameters. VERY VERBOSE, but easy to read.
// function meanOfSet() {
//   let sum = 0
//   for (let i=0; i < arguments.length; i++) {
//     sum += arguments[i]
//   }
//   return sum / arguments.length
// }

function meanOfSet(s) {
  let sum = 0
  for (let i=0; i < s.length; i++) {
    sum += s[i]
  }
  return sum / s.length
}

function volumeOf3DRectangularPrismM3(lm, wm = 1, hm = 1) {
  return lm * wm * hm
}

// Arrow function, very simple, one line
const sphereVol = (r) => 4 * Math.PI * Math.pow(r, 3) / 3

// function sphereVolAcc(radii) {
//   let acc = []
//
//   for (let i = 0; i < radii.length; i++) {
//     acc[i] = sphereVol(radii[i])
//   }
//
//   return acc
// }

// function sphereVolAcc(radii) {
//   return radii.map(sphereVol)
// }

const sphereVolAcc = (radii) => radii.map(sphereVol)

// Use it
// console.log(sphereVol(1))
// console.log(meanOfSet([1,2,3,4,5]))
// console.log(`${volumeOf3DRectangularPrismM3(10, 10, 11)} cubic meters`)
// console.log(`${volumeOf3DRectangularPrismM3(30)} cubic meters`)
// console.log(`${volumeOf3DRectangularPrismM3(40)} cubic meters`)

let volumes = sphereVolAcc([1, 10, 11, 0.5, 0.75, 0.707])
console.log(volumes)
