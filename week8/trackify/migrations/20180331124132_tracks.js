exports.up = function(knex) {
  return knex.schema.createTable('tracks', (table) => {
    table.increments();
    table.integer('artist_id')
      .notNullable()
      .references('id')
      .inTable('artists')
      .onDelete('CASCADE')
      .index();
    table.string('title').notNullable().defaultTo('');
    table.integer('likes').notNullable().defaultTo(0);
    table.timestamps(true, true);
  });
}

exports.down = function(knex) {
  return knex.schema.dropTable('tracks');
}
