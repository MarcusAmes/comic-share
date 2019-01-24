
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          username: 'marcus',
          password: "12345",
          img_url: "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg"
        },
        {
          username: 'dennis',
          password: "12345",
          img_url: "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg"
        },
        {
          username: 'harrison',
          password: "12345",
          img_url: "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg"
        },
      ]);
    });
};
