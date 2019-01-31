const knex = require("../db/knex.js");

module.exports = {
  upload: (req, res) => {
    console.log(req.files.file);
    res.json({message: "responed"})
  }
}