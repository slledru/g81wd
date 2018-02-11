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
//console.log(sphereVolAcc([2,5,8]));

const args = () => arguments.length // implied return

//console.log(args(1,2,3,4));

function total() {
  var total = 0;
  for (var i=0; i<arguments.length; i++) {
    if (typeof arguments[i] === "number") {
      total += arguments[i];
    }
  }
  return total;
}
//console.log(total(1,4,3,'3'));

const anotherArgs = () => {
  //arguments.pop();  arguments does not implement pop() method
  return arguments.length;
}
//console.log(anotherArgs());

function power(base, exponent) {
  console.log(exponent);
  var exponent = (exponent || 2);
  var result = 1;
  for (var count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}
console.log(power(4, 0));
console.log(power(5));
