
exports.up = function(knex, Promise) {
  return knex.schema.createTable("comments", (table) => {
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
    table.text("comment");
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("comments");
};
