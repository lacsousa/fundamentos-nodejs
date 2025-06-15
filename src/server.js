// const http = require('http');
// CommonJS -> require, but today we use ES6 import

import http from 'node:http';

const server = http.createServer((req, res) => {
  return res.end('Hello Luciano Cordeiro!');
});

server.listen(3333);