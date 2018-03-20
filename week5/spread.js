var a = [[1], [2], [3]];
var b = [...a];
console.log(a);
console.log(b);
b.shift().shift(); // 1
console.log(a);
console.log(b);

var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }
console.log(clonedObj);
var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
console.log(mergedObj);

function multiply (...num) {
  console.log(num);
  return num.length > 0 ? num.reduce((last, element) => last * element, 1) : 0
}
multiply() // 0
multiply(1) // 1
multiply(1, 2) // 2
multiply(1, 2, 3) // 6
multiply(1, 2, 3, 4) // 24
