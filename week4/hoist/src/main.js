function yayTheTestsWork() {
  return true
}

// function scopeExperiment(x) {
//   let result = null;
//   if (x > 5) {
//     result = 'x is greater than 5';
//   } else {
//     result = 'x is less than or equal to 5';
//   }
//   return result;
// }

function scopeExperiment(x) {
  return (
    x > 5
      ? 'x is greater than 5'
      : 'x is less than or equal to 5'
  );
}

function shadowingExperiment(x) {
  let result = null;
  if (x > 5) {
    // let result = 'x is greater than 5';  inner scope
    result = 'x is greater than 5';
  } else {
    result = 'x is less than or equal to 5';
  }
  return result;
}

function closureExperiment(outerX) {
  const x = outerX;

  function innerFunction() {
    return x * 2;
  }
  return innerFunction;
}

const upAndDown = (function() {
  let counter = 0;
  return {  // function hoisting
    increment,
    decrement,
    read
  };

  function increment() {
    counter++;
  };
  function decrement() {
    counter--;
  }
  function read() {
    return `We're at ${counter}`;
  }
})();

module.exports = {
  yayTheTestsWork,
  scopeExperiment,
  shadowingExperiment,
  closureExperiment,
  upAndDown
}
