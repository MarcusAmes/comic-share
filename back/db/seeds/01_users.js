
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          username: 'marcus',
          password: "$2a$10$hMHOqFBEfSrqeRVqn5APheWPkce4n86BakvPnXmmPb2jHhkXsLDMO",
          img_url: "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg"
        },
        {
          username: 'dennis',
          password: "$2a$10$hMHOqFBEfSrqeRVqn5APheWPkce4n86BakvPnXmmPb2jHhkXsLDMO",
          img_url: "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg"
        },
        {
          username: 'harrison',
          password: "$2a$10$hMHOqFBEfSrqeRVqn5APheWPkce4n86BakvPnXmmPb2jHhkXsLDMO",
          img_url: "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg"
        },
      ]);
    });
};
