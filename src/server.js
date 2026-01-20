// const http = require('http');
// CommonJS -> require, but today we use ES6 import

import http from 'node:http';
import { json } from './middlewares/json.js';
import { routes } from './routes.js';

// GET, POST, PUT, PATCH, DELETE
// HTTP methods
// http://localhost:3333

// GET -> Read data from backend
// POST -> Create data in backend
// PUT -> Update data in backend
// PATCH -> Partial update data in backend
// DELETE -> Delete data in backend


//JSON - Javascript Object Notation
// JSON is a format for data exchange between frontend and backend

//Headers are metadata about the request or response

/*
Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)
*/

// UUID - Universally Unique Identifier

//const users = [];


const server = http.createServer(async (req, res) => {
  
  const { method, url } = req;
  
  await json(req, res); // Middleware to parse JSON body

  console.log(req.body);
  console.log(method, url);

  const route = routes.find(route => {
    return route.method === method && route.path === url;
  });

  if (route) {
    return route.handler(req, res);
  }  
  
  return res.writeHead(404).end("Not Found");
});

server.listen(3333);
