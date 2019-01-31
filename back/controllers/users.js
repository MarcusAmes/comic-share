const knex = require("../db/knex.js");
const hasher = require("../config/hasher.js");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "donuts";

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
                delete user.password;
                const token = jwt.sign(user, secret)
                res.json({message: "Successfully signed in", token, user})
              } else {
                res.status(401).send({
                  message: 'You are not authorized, Please log in to continue.'
                })
              }
            })
        } else {
          return res.status(401).send({
            message: 'You are not authorized, Please log in to continue.'
          })
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
              }, 'id')
              .then(() => {
                res.json({message: "Successfully Registered, please log in"})
              })
          })
        } else {
          res.status(401).send({
            message: 'You are not authorized, Please log in to continue.'
          })
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