const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors')
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

var routes_setter = require('./config/routes.js');
routes_setter(app);

app.listen(port, function() {
  console.log('Listening on', port);
});
