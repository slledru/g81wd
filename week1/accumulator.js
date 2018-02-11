function doubleNumbers(numbers) {
  numbers.forEach((n, i, array) => array[i] = n * 2);
  return numbers;
};

function multiplyNumbers(numbers, multiplier = 0) {
  numbers.forEach((n, i, array) => array[i] = n * multiplier);
  return numbers;
};

function doubleLetters(letters) {
  var newString = '';
  for (var i = 0; i < letters.length; i++) {
    newString += letters[i].repeat(2);
  }
  return newString;
};

console.log(doubleLetters('abc'));

function interleave(firstArray, secondArray) {
  var newArray = [];
  var length = firstArray.length;
  if (secondArray.length < length) {
    length = secondArray.length;
  };
  for (var i = 0; i < length; i++) {
    newArray.push(firstArray[i]);
    newArray.push(secondArray[i]);
  }
  if (firstArray.length > secondArray.length) {
    for (var i = length; i < firstArray.length; i++) {
      newArray.push(firstArray[i]);
    }
  } else {
    for (var i = length; i < secondArray.length; i++) {
      newArray.push(secondArray[i]);
    }
  }
  return newArray;
};
console.log(interleave([
  'a', 'b', 'c'
], ['d', 'e', 'f']));

function flipArray(array) {
  var obj = {};
  for (var i = 0; i < array.length; i++) {
    obj[array[i]] = i;
  }
  return obj;
}

function arraysToObject(array) {
  var obj = {};
  for (var i = 0; i < array.length; i++) {
    obj[array[i][0]] = array[i][1];
  }
  return obj;
}

function reverseString(orig) {
  var reversed = '';
  if (orig.length > 0) {
    for (var i = orig.length; i > 0; i--) {
      reversed += orig[i - 1];
    }
  }
  return reversed;
}

function repeats(orig) {
  var repeating = false;
  if (orig.length > 0) {
    if (orig.length % 2 === 0) {
      var half = orig.length / 2;
      repeating = (orig.substr(0, half) === orig.substr(half, half));
    }
  } else {
    repeating = true;
  }
  return repeating;
}

console.log(repeats('haha'));
console.log(repeats('ha'));
console.log(repeats('yay'));
console.log(repeats('heehaw'));
console.log(repeats(''));

function everyOther(orig) {
  var newString = '';
  if (orig.length > 0) {
    for (var i = 0; i < orig.length; i += 2) {
      newString += orig[i];
    }
  }
  return newString;
}
console.log(everyOther('abcdef'));

function allEqual(orig) {
  var obj = {};
  if (orig.length > 0) {
    for (var i = 0; i < orig.length; i++) {
      obj[orig[i]] = orig[i];
    }
    return Object.keys(obj).length === 1;
  }
  return true;
}

function sumLetters(orig) {
  var sum = 0;
  for (var i = 0; i < orig.length; i++) {
    sum += + orig[i];
  }
  return sum;
}
console.log(sumLetters('246'));

function countVowels(orig) {
  var count = 0;
  for (var i = 0; i < orig.length; i++) {
    switch (orig[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        count++;
        break;
      default:
    }
  }
  return count;
}
console.log(countVowels('you'));

function split(orig) {
  var array = [];
  for (var i = 0; i < orig.length; i++) {
    array.push(orig[i]);
  }
  return array;
}
console.log(split('you'));

function getCodePoints(orig) {
  var array = [];
  for (var i = 0; i < orig.length; i++) {
    array.push(orig.codePointAt(i));
  }
  return array;
}
console.log(getCodePoints('Hello'));

function letterMap(orig) {
  var obj = {};
  for (var i = 0; i < orig.length; i++) {
    obj[orig[i]] = i;
  }
  return obj;
}
console.log(letterMap('Hello'));

function letterCount(orig) {
  var obj = {};
  for (var i = 0; i < orig.length; i++) {
    if (obj[orig[i]] === undefined) {
      obj[orig[i]] = 1;
    } else {
      obj[orig[i]]++;
    }
  }
  return obj;
}
console.log(letterCount('Hello'));

function threeOdds(start, end) {
  var count = 0;
  for (var i = start + 1; i < end; i++) {
    if (i % 2 !== 0) {
      count++;
    }
  }
  return count >= 3;
}
console.log(threeOdds(0, 6));
console.log(threeOdds(1, 5));

function createString(num, letter) {
  var string = '';
  for (var i = 0; i < num; i++) {
    string += letter;
  }
  return string;
}

function factorial(num) {
  var fac = 1;
  for (var i = num; i > 1; i--) {
    fac *= i;
  }
  return fac;
}

function arrayOfNumbers(num) {
  var array = [];
  for (var i = 0; i < num; i++) {
    array.push(i + 1);
  }
  return array;
}

function evenOdd(start, end) {
  var obj = {};
  if ((start != end) || (start !== 0 && end !== 0)) {
    for (var i = start; i <= end; i++) {
      if (i % 2 === 0) {
        obj[i + ""] = 'even';
      } else {
        obj[i + ""] = 'odd';
      }
    }
  }
  return obj;
}
console.log(evenOdd(0, 1));

function growingKeys(num, letter) {
  var obj = {};
  var key = '';
  for (var i = 0; i < num; i++) {
    key += letter;
    obj[key] = true;
  }
  return obj;
}

function every(array, num) {
  if (array.length > 0) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] !== num) {
        return false;
      }
    }
  }
  return true;
}

function some(array, num) {
  if (array.length > 0) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === num) {
        return true;
      }
    }
  }
  return false;
}

function toSentence(names) {
  var string = '';
  if (names.length > 1) {
    for (var i = 0; i < names.length; i++) {
      if (string.length > 0) {
        if (i === names.length - 1) {
          string += ' and ';
        } else {
          string += ', ';
        }
      }
      string += names[i];
    }
  } else if (names.length > 0) {
    string = names[0];
  }
  return string;
}
console.log(toSentence(['Sam', 'Susan']));
console.log(toSentence(['Sam', 'Susan', "Pete"]));

function acronym(array) {
  var string = '';
  for (var i = 0; i < array.length; i++) {
    string += array[i][0];
  }
  return string;
}
console.log(acronym(['Sam', 'Susan']));

function index(array, key) {
  var obj = {};
  for (var i = 0; i < array.length; i++) {
    obj[array[i][key]] = array[i];
  }
  return obj;
}
console.log(index([
  {
    id: 1,
    name: 'Joe'
  }, {
    id: 2,
    name: 'Sue'
  }
], 'id'));
console.log(index([
  {
    id: 1,
    name: 'Joe'
  }, {
    id: 2,
    name: 'Sue'
  }
], 'name'));

function invert(obj) {
  var newObj = {};
  for (var key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
}
console.log(invert({id: 1, name: "Joe"}));

function addSignature(name, obj) {
  var newObj = {};
  if (obj !== null && obj !== undefined) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      newObj[keys[i] + '-signed'] = obj[keys[i]] + ' - ' + name;
    }
  }
  return newObj;
}
console.log(addSignature("Fred", {"contract": "foo"}));
console.log(addSignature('Fred', {}));

function pairs(obj) {
  var array = [];
  if (obj !== null && obj !== undefined) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      array.push(keys[i] + ' - ' + obj[keys[i]].toLowerCase());
    }
  }
  return array;
}

function sumValues(obj) {
  var total = 0;
  if (obj !== null && obj !== undefined) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      total += +obj[keys[i]];
    }
  }
  return total;
}

function biggestProperty(obj) {
  var selected;
  var max;
  if (obj !== null && obj !== undefined) {
    for (var key in obj) {
      if (max === undefined) {
        max = +obj[key];
        selected = key;
      }
      else {
        if (max < +obj[key]) {
          max = +obj[key];
          selected = key;
        }
      }
    }
  }
  return selected;
}
console.log(biggestProperty({1999: 4036, 2000: 7654}));

function keyForValue(obj, num) {
  var selected;
  if (obj !== null && obj !== undefined) {
    for (var key in obj) {
      if (num === +obj[key]) {
        selected = key;
      }
    }
  }
  return selected;
}

function containsValue(obj, num) {
  if (obj !== null && obj !== undefined) {
    for (var key in obj) {
      if (num === +obj[key]) {
        return true;
      }
    }
  }
  return false;
}
