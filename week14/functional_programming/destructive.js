// Incorporate what you have learned about
// functional programming and make this function
// non-destructive. Consider making it a pure
// function that does not have any side-effects.

function destructiveMap(myArray) {
  for (var i = 0; i < myArray.length; i++) {
    myArray[i] = myArray[i] * 2;
  }
  return myArray;
}

var oldArray = [1,2,3];
var newArray = destructiveMap(oldArray);
console.log("calling destructiveMap");
console.log("oldArray: " + oldArray);
console.log("newArray: " + newArray);
