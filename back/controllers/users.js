const knex = require("../db/knex.js");
const hasher = require("../config/hasher.js");

const jwt = require("jsonwebtoken");
const secret = process.env.JSON_WEBTOKEN || "donuts";

module.exports = {
  index: (req, res) => {
    knex("users").then(users => {
      res.json(users)
    })
  },
  login: (req, res) => {
    knex('users')
      .where('username', req.body.username)
      .then((results) => {
        if (results.length >= 1) {
          let user = results[0]
          hasher.check(user, req.body)
            .then((matches) => {
              if (matches) {
                res.json(user)
              } else {
                res.sendStatus(401)
              }
            })
        } else {
          res.sendStatus(401)
        }
      })
  },
  register: (req, res) => {
    knex('users')
      .where('username', req.body.username)
      .then(users => {
        if (!users.length) {
          hasher.hash(req.body)
          .then((user) => {
            knex('users')
              .insert({
                username: user.username,
                password: user.password
              }, '*')
              .then((result) => {
                res.json(result[0])
              })
          })
        } else {
          res.sendStatus(401)
        }
      })
  },
  update: (req, res) => {
    knex('users')
      .where('users.id', req.params.id)
      .update(req.body, '*')
      .then(newUser => {
        res.json(newUser[0])
      })
  }

}