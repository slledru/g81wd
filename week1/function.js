var factorial = function fac(n) {
  return n < 2
    ? 1
    : n * fac(n - 1);
};

//console.log(factorial(5));
//console.log(fac(5));

const square = (r) => r * r;
//console.log(square(4));

// accumulator pattern
// function sphereVolAcc(radii) {
//   let acc = [];
//   for (let i = 0; i < radii.length; i++) {
//     acc[i] = square(radii[i]);
//   }
//   return acc;
// }


const sphereVolAcc = (radii) => radii.map(square)
console.log(sphereVolAcc([2,5,8]));
