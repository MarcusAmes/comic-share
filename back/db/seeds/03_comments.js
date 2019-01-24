
exports.seed = function(knex, Promise) {
  return knex('comments').del()
    .then(function () {
      return knex('comments').insert([
        {
          user_id: 1,
          comic_id: 2,
          comment: "sick dude!!!!"
        },
        {
          user_id: 1,
          comic_id: 3,
          comment: "sick dude!!!!"
        },
        {
          user_id: 2,
          comic_id: 1,
          comment: "sick dude!!!!"
        },
        {
          user_id: 2,
          comic_id: 3,
          comment: "sick dude!!!!"
        },
        {
          user_id: 3,
          comic_id: 2,
          comment: "sick dude!!!!"
        },
        {
          user_id: 3,
          comic_id: 1,
          comment: "sick dude!!!!"
        }
      ]);
    });
};
