const express = require('express');

const port = 3000;
const server = express();

server.listen(port);

server.get('/', function (req, res) {
    res.send('Hello World!');
});
  
console.log(`Serving at http://localhost:${port}`);
