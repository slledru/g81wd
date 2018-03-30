
exports.up = function (knex, Promise) {
  return knex.schema.createTable('cocktails', table => {
    table.increments()
    table.varchar('name', 255)
    table.text('instructions')
    table.string('garnish')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cocktails')
}
