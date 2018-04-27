function foo(array) {
  const firstPass = array.reduce((acc, num, i, arr) => {
    if (i < Math.floor(arr.length / 2)) {
      acc.push((arr[i] + arr[arr.length - i - 1]))
    }
    else if (i === Math.floor(arr.length / 2)) {
      if (arr.length % 2 !== 0) {
        acc.push(num)
      }
    }
    return acc
  }, [])
  return firstPass
}

let array = [1, 4, 5, 3, 5, 6]
console.log(foo(array))
array = [1, 4, 5, 3, 5, 6, 12, 10, 4]
console.log(foo(array))
