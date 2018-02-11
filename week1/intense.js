function median(numbers) {
  numbers = numbers.sort((x, y) => x > y);
  console.log(numbers);
  var m;
  if (numbers.length % 2 === 0) {
    m = (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;
  } else {
    m = numbers[(numbers.length + 1) / 2 - 1];
  }
  return m;
}
console.log(median([
  8,
  5,
  8,
  4,
  8,
  12,
  13,
  5,
  9
]));
function mode(numbers) {
  var hash = {};
  numbers.forEach(n => {
    if (hash[n] === undefined) {
      hash[n] = 1;
    } else {
      hash[n]++;
    }
  });

  console.log(hash);

  var initial = true;
  var maxKey;
  var max;
  for (var key in hash) {
    if (initial) {
      maxKey = key;
      max = hash[key];
      initial = false;
    } else {
      if (max < hash[key]) {
        max = hash[key];
        maxKey = key;
      }
    }
  }
  return maxKey;
}
console.log('======');
console.log(mode([
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  3,
  5
]));
console.log(mode([
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  3,
  5
]));


function isIntenseString(str) {
  var intenseRE = new RegExp('[^!]+!{3,}$');
  var normalRE = new RegExp('[^!]*![^!]+.*$');
  if (str.match(intenseRE) !== null) {
    if (str.match(normalRE) !== null) {
      return false;
    }
    return true;
  }
  return false;
}

console.log(isIntenseString('Hello!!!'));
console.log(isIntenseString('This is an intense string!!!!'));
console.log(isIntenseString('This is ! not an intense string!!!'));
console.log(isIntenseString('Also not intense!!'));
console.log(isIntenseString('Hello'));
