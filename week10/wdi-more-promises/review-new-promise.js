// Review how to create promises manually

function giveMeAPromise() {
  console.log('1. giveMeAPromise')
  return new Promise((resolve, reject) => {
    console.log('2. about to resolve')
    resolve(73) // keep it in the last line
  })
}

giveMeAPromise()
  .then((result) => console.log('4. result', result))
  .catch((err) => console.log(`ERROR ${err}`))

console.log('3. Promise Sent')
