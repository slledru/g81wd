var wierd = [];
wierd['food'] = 'apple';
console.log(wierd);
console.log(wierd[0]);
console.log(wierd.length);
console.log(wierd['food']);

wierd[0] = 'please be reasonable';
console.log(wierd);
console.log(typeof wierd);
wierd[1] = 'one';

console.log(wierd);
wierd.push('end');
console.log(wierd);

var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at 1st index position
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at 4th index
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']

months.splice(4, 1);
// replaces 1 element at 4th index
console.log(months);

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2, animals.length));
console.log(animals.slice(2));

var myArray = ['craig', 'alicia', 'pete', 'tara'];
console.log(myArray.splice(1, 2));
console.log(myArray);

var myArr = [40, 50, 60, 70];
for (var i = 0; i < myArr.length; i++) {
  myArr[i] += myArr[i] + 5;
}
console.log(myArr);

var i = 0;
while (i < myArr.length) {
  myArr[i] += 5;
  i++;
}
console.log(myArr);

myArr.forEach(function(element, i) {
  myArr[i] += 5;
});
console.log(myArr);

for (element of myArr) {
  element += 5;
}
console.log(myArr);

var a1 = [1,2,3,4];
var a2 = [4,5,6,7];
console.log(a1.concat(a2));

var newStuff = [];
newStuff.push(a1);
newStuff.push(a2);
console.log(newStuff);
newStuff.push(a1, a2);
console.log(newStuff);
a1.push(a2);
console.log(a1);
newStuff.push(a1);
console.log('=======');
console.log(newStuff);
console.log('=======');
console.log('\n' + newStuff);
