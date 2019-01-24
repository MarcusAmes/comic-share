
exports.seed = function(knex, Promise) {
  return knex('favorites').del()
    .then(function () {
      return knex('favorites').insert([
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
