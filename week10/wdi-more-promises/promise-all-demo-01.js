function p1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('developers!'), 500)
  })
}

function p2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('dEvElOpErS!'), 1000)
  })
}

function p3() {
  return new Promise((resolve, reject) => {
    // setTimeout(() => resolve('DEVELOPERS!'), 1500)
    // setTimeout(() => reject('Steve Ballmer!'), 1500)
    reject('Steve Ballmer!')
  })
}

Promise.all([p1(), p2(), p3()])
  .then((results) => console.log(results))
  .catch((err) => console.log(`AWWW SNAP! ${err}`))
