const template = (strings, ...keys) => {
  let result = '';
  // swap the first and the second from keys
  let tmp = keys[0];
  keys[0] = keys[1];
  keys[1] = tmp;
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < keys.length) {
      result += keys[i];
    }
  }
  return result;
}

let a = 5;
let b = 8;
console.log(template`Adding ${a} to ${b} is ${a + b}.`);
