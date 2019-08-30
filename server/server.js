// DEPENDENCIES
const express = require('express');
const bodyParser = require('body-parser');

const server = express();

// ROUTES
const emailRoute = require('./routes/api/index');

// MIDDLEWARE
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use('/email', emailRoute);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server is listening on localhost: ${port}`);
});
