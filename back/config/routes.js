//Update the name of the controller below and rename the file.
const users = require("../controllers/users.js");
const comics = require("../controllers/comics.js");
const comments = require("../controllers/comments.js");
module.exports = function(app){

  //USERS
    app.get('/', users.index);
    app.post('/login', users.login);
    app.post('/register', users.register);
    app.put('/users/:id', users.update)
  
  //COMICS
    app.get('/comics', comics.all);

  //COMMMENTS
    app.get('/comments/:id', comments.onComic);
    app.post('/comments', comments.add)
    app.delete('/comments/:id', comments.remove)
}
