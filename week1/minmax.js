
function max(numbers) {
  var maxValue; // shoud be undefined
  if (numbers.length > 0) {
    maxValue = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxValue) {
        maxValue = numbers[i];
      }
    }
  }
  else {
    maxValue = 0;
  }
  return maxValue;
}
console.log(max([])); // 0
console.log(max([ 6 ])); // 6
console.log(max([ 5, 3, 1, 2, 4 ])); // 5
console.log(max([ 20, 10, 0, -10, -20 ])); // 20

function min (numbers) {
  var minValue; // shoud be undefined
  if (numbers.length > 0) {
    minValue = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
      if (numbers[i] < minValue) {
        minValue = numbers[i];
      }
    }
  }
  else {
      minValue = 0;
  }
  return minValue;
}

console.log(min([])); // 0
console.log(min([ 6 ])); // 6
console.log(min([ 5, 3, 1, 2, 4 ])); // 1
console.log(min([ 20, 10, 0, -10, -20 ])); // -20
