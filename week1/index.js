function indexOf (array, number) {
  var index = -1;
  if (number !== undefined) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === number) {
        return i;
      }
    }
  }
  return index;
}

console.log(indexOf([]));
console.log(indexOf([ 6 ], 6));
console.log(indexOf([ 5, 3, 1, 2, 4 ], 2));
console.log(indexOf([ 20, 10, 0, -10, -20 ], 5));
console.log(indexOf([ '7', '8', '9' ], 7));
console.log(indexOf([ 7, 7, 7 ], 7));
