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

// select glasses.name as glass_name,
//  cocktails.name as cocktails_name,
//  instructions,
//  garnish from glasses
//  inner join cocktails on cocktails.glass_id = glasses.id;
function demo02() {
  knex.select('glasses.name as glass_name', 'cocktails.name as cocktails_name', 'instructions', 'garnish')
    .from('cocktails')
    .join('glasses', 'glasses.id', 'cocktails.glass_id')
    .then(rows => {
      rows.forEach(row => console.log(row))
      knex.destroy()
    })
}

// Demo 03: Join on three tables.
function demo03() {
  knex
    .select('cocktails.name as cocktail_name', 'glasses.name as glass_name', 'ingredients.name as ingredient_name', 'cocktails.instructions as cocktail_instructions')
    .from('cocktails_ingredients')
    .join('cocktails', 'cocktails_ingredients.cocktail_id', 'cocktails.id')
    .join('ingredients', 'cocktails_ingredients.ingredient_id', 'ingredients.id')
    .join('glasses', 'cocktails.glass_id', 'glasses.id')
    .where('cocktails.name', 'Old Fashioned')
    .then((rows) => {
      console.log(rows)
      knex.destroy()
    })
    .catch((err) => {
      console.error(chalk.bgRed(err))
      knex.destroy()
    })
}

// demo01()
// demo02()
demo03()
