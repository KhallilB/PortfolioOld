// DEPENDENCIES
const express = require('express');

const server = express();

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server is listening on localhost: ${port}`);
});
