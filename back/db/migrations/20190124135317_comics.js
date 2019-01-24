
exports.up = function(knex, Promise) {
  return knex.schema.createTable("comics", (table) => {
    table.increments();
    table.integer("user_id")
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE');
    table.text("name");
    table.text("summary");
    table.integer("pages");
    table.text("aws_file");
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("comics");
};
