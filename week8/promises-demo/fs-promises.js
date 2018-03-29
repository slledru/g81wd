const chalk = require('chalk')
const fs = require('fs')

function readFile(filename) {
  return new Promise((resolve, reject) => {
    const options = {
      flag: 'r',
      encoding: 'utf8'
    }

    fs.readFile(filename, options, (err, data) => {
      if (err) {
        reject(err)
      }
      else {
        resolve(data)
      }
    })
  })
}

readFile('README.mddd')
  .then((result) => {
    console.log(result)
  })
  // .catch((err) => {
  //   console.log(chalk.bgRed(err))
  // })


console.log(chalk.green('Promise is now pending'))
