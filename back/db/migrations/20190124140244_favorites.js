
exports.up = function(knex, Promise) {
  return knex.schema.createTable("favorites", (table) => {
    table.increments();
    table.integer("user_id")
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE');
    table.integer("comic_id")
      .references('id')
      .inTable('comics')
      .notNullable()
      .onDelete('CASCADE');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("favorites");
};
