
exports.seed = function(knex, Promise) {
  return knex('comics').del()
    .then(function () {
      return knex('comics').insert([
        {
          user_id: 1,
          name: "Adventures of Gary",
          summary: "Gary does stuff",
          pages: 12,
          aws_file: null
        },
        {
          user_id: 2,
          name: "Adventures of Gary",
          summary: "Gary does stuff",
          pages: 12,
          aws_file: null
        },
        {
          user_id: 3,
          name: "Adventures of Gary",
          summary: "Gary does stuff",
          pages: 12,
          aws_file: null
        },
      ]);
    });
};
