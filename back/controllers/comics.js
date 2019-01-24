const knex = require("../db/knex.js");

module.exports = {
  all: (req, res) => {
    knex("comics").join("users", "comics.user_id", "users.id")
    .then(comics => {
      res.json(comics)
    })
  }
}
