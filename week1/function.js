var factorial = function fac(n) {
  return n < 2
    ? 1
    : n * fac(n - 1);
};

console.log(factorial(5));
//console.log(fac(5));
