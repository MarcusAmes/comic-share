
exports.seed = function(knex, Promise) {
  return knex('table_name').del()
    .then(function () {
      return knex('table_name').insert([
        {
          user_id: 1,
          comic_id: 2
        },
        {
          user_id: 1,
          comic_id: 3
        },
        {
          user_id: 2,
          comic_id: 1
        },
        {
          user_id: 3,
          comic_id: 2
        }
      ]);
    });
};
