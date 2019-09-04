// DEPENDENCIES
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();

require('dotenv').config();

// ROUTES
const emailRoute = require('./routes/api/index');

// MIDDLEWARE
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use(cors);

server.use('/email', emailRoute);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server is listening on localhost: ${port}`);
});
