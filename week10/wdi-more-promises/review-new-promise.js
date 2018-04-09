// Review how to create promises manually

function giveMeAPromise() {
  console.log('giveMeAPromise')
  return new Promise((resolve, reject) => {
    console.log('about to resolve')
    resolve(73) // keep it in the last line
  })
}

giveMeAPromise()
  .then((result) => console.log('result', result))
  .catch((err) => console.log(`ERROR ${err}`))

console.log('Promise Sent')
