const users = require("../controllers/users.js");
const comics = require("../controllers/comics.js");
const comments = require("../controllers/comments.js");
const aws = require("../controllers/aws.js");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "donuts";

module.exports = function(app){

  //USERS
    app.get('/', users.index);
    app.post('/login', users.login);
    app.post('/register', users.register);
    
  //AUTH
    app.use(jwtAuth);

  //USERS after auth
    app.put('/users/:id', users.update)

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

  //UPLOAD
    app.post('/upload', aws.upload)
}

const jwtAuth = (req, res, next) => {
  const token = req.body.token || req.headers.token || req.query.token;
  
  if (token) {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: 'You are not authorized, Please log in to continue.'
        });
      } else {
        delete decoded.password;
        req.decoded = decoded;
        next();
      }
    })
  } else {
    return res.status(401).send({
      message: 'You are not authorized, Please log in to continue.'
    });
  }

}