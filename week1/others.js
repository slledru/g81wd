console.log(Math.floor(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));

let date = new Date('04/01/2018');
console.log(date.toString());

let now = Date.now();
console.log(now);
console.log(now.toString());

let obj = {
  a: 'apple',
  b: 'boy',
  c: 'cat'
};
let keys = Object.keys(obj);
for (var i = 0; i < keys.length; i++) {
  console.log(keys[i] + " : " + obj[keys[i]]);
}
console.log('=====');
for (var key in obj) {
  console.log(key + " : " + obj[key]);
}

console.log('=====');
let some = {0: 'dead', 1: 'test', 2: 'was', 3: 'myself'}
console.log(some[0]);
console.log('=====');
for (var i = 0; i < Object.keys(some).length; i++) {
  console.log(some[i]);
}

console.log('=====');
var arr = new Array();
arr["key1"] = "value1";
arr["key2"] = "value2";
arr["key3"] = "value3";
arr["key4"] = "value4";
arr.push("value5")
console.log(arr);
console.log("Using forEach");
arr.forEach(elem => console.log(elem));

console.log("Using iterator with for-of");
var iterator = arr.entries();
for (var e of iterator) {
  console.log(e);
}

console.log("keys of arr");
console.log(arr.keys());
//console.log(arr.values());

var num = 0.415123;
console.log(num.toFixed(2));
