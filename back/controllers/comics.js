const knex = require("../db/knex.js");

module.exports = {
  all: (req, res) => {
    knex("comics").join("users", "comics.user_id", "users.id")
    .then(comics => {
      res.json(comics)
    })
  },
  info: (req, res) => {
    knex("comics").join("users", "comics.user_id", "users.id")
    .where('comics.id', req.params.id)
    .then(comics => {
      res.json(comics[0])
    })
  },
  add: (req,res)=>{
    knex("comics").insert({
      user_id: req.body.user_id,
      name: req.body.name, 
      summary:req.body.summary, 
      pages:req.body.pages,
      aws_file: req.body.aws_file
      
    },'*')
    .then(comic =>{
      res.json(comic[0])
    })
  },
  delete: (req,res)=>{
    knex("comics").del('*')
    .where('comics.id',req.params.id)
    .then(comic =>{
      res.json(comic[0])
  })
},
  update: (req,res)=>{
    knex("comics").update(req.body,'*')
    .where("comics.id",req.params.id)
    .then(comics => {
      res.json(comics[0])
    })
  }
}