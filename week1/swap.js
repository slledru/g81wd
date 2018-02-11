function longestString (strings) {
  var result = ''

  for (var i = 0; i < strings.length; i++) {
    var string = strings[i]
    if (string.length > result.length) {
      result = string
    }
  }

  return result
}

var dinosaur = longestString([ 'spinosaurus', 'troodon', 'dilophosaurus' ])

console.log(`${dinosaur} is the longest word.`)
