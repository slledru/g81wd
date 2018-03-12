var a = 10
var b = 20
function ex() {
  a = 50
  var b = 40
}
ex()
console.log(a,b)

const arrayOne = [1, 2, 3]
const arrayTwo = [2, 4]
let resultArray = arrayOne.reduce((newArray, num) => {
	if (!arrayTwo.includes(num)) {
		newArray.push(num)
	} 
	return newArray
}, [])
console.log(resultArray)
