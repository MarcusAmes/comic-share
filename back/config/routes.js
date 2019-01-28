const users = require("../controllers/users.js");
const comics = require("../controllers/comics.js");
const comments = require("../controllers/comments.js");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "donuts";

module.exports = function(app){

  //USERS
    app.get('/', users.index);
    app.post('/login', users.login);
    app.post('/register', users.register);
    app.put('/users/:id', users.update)

  //AUTH
    app.use(jwtAuth());
  
  //COMICS
    app.get('/comics', comics.all);
    app.get('/comics/:id', comics.info)
    app.post('/comics', comics.add)
    app.delete('/comics/:id', comics.delete)
    app.put('/comics/:id', comics.update)

  //COMMMENTS
    app.get('/comments/:id', comments.onComic);
    app.post('/comments', comments.add)
    app.delete('/comments/:id', comments.remove)
}

const jwtAuth = () => {
  const token = req.body.token || req.headers.token || req.query.token;
  
  if (token) {
    jwt.verify(token, secret);

  }

}