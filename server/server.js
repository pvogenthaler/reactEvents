const express = require('express');
const app = express();
const routes = require('./routes.js');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/public'));
app.use('/events', routes);

app.listen(port, () => {
  console.log('listening on port: ', port);
});

module.exports = app;
