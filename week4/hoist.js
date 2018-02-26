hello();

function hello() {
  console.log('Hello');
}

// When using let or const, hoisting doesn't work
// helloMe();
// let helloMe = () => {
//   console.log('does this work?');
// }

let logNum = () => {
  console.log(1);
}
logNum();
console.log(logNum.name);
