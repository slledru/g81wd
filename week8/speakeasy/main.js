const knex = require('./knex')  // This is the file I had created, not knex node module
const chalk = require('chalk')

// knex.select('*').from('glasses') returns a Promise object
function demo01() {
  knex.select('*').from('glasses') // select * from glasses
    .then(rows => {
      console.log(rows)
      knex.destroy()
    })
}

demo01()
