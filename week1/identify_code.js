/*
  a -> z
  b -> y
  l -> o
*/
function identifyCodeC(char) {
  let startCode = 'a'.charCodeAt();
  let lastCode = 'z'.charCodeAt();
  let diff = char.charCodeAt() - startCode;
  let result = lastCode - diff;
  console.log(String.fromCodePoint(result));
}

identifyCodeC('a');
identifyCodeC('c');
identifyCodeC('l');
