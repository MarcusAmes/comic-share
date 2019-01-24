//Update the name of the controller below and rename the file.
const users = require("../controllers/users.js")
module.exports = function(app){

  //USERS
    app.get('/', users.index);
    app.post('/login', users.login);
    app.post('/register', users.register);
}
