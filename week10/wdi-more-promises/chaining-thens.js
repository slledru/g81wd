function p73() {
  return new Promise((resolve, reject) => {
    resolve([8, 4, 1])
    // reject('Whatever')
  })
}

p73()
  .then((xs) => xs.map((x) => x ** 2))
  .then((xs) => xs.reduce((a , b) => a + b, 0))
  // .then(() => Promise.reject('TOOOOO much math, make it stop!'))
  .then((xs) => Math.sqrt(xs))
  .then((xs) => console.log(xs))
  .catch((err) => console.log(`ERR! ${err}`))
