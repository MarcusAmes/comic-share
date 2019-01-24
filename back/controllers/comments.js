const knex = require("../db/knex.js");

module.exports = {
  onComic: (req, res) => {
    knex("comments")
      .where("comments.comic_id", req.params.id)
      .join("users", "comments.user_id", "users.id")
      .then(comments => {
        res.json(comments);
      })
  },
  add: (req, res) => {
    const {user_id, comic_id, comment} = req.body
    knex("comments")
      .insert({
        user_id,
        comic_id,
        comment
      }, '*')
      .then(newComment => {
        res.json(newComment[0]);
      })
  },
  remove: (req, res) => {
    knex("comments")
      .where("comments.id", req.params.id)
      .del('*')
      .then(remComment => {
        res.json(remComment[0]);
      })
  }
}