// const http = require('http');
// CommonJS -> require, but today we use ES6 import

import http from 'node:http';
import { json } from './middlewares/json.js';

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
const users = [];

const server = http.createServer(async (req, res) => {
  
  const { method, url } = req;
  
  await json(req, res); // Middleware to parse JSON body

  console.log(req.body);
  console.log(method, url);

  if (method === "GET" && url === "/users") {
    // Early return to avoid unnecessary processing
    return res
      .end(JSON.stringify(users));
   
  }

  if (method === "POST" && url === "/users") {

    const { name, email } = req.body;

    users.push({ id: 1, 
      name,
      email
    });

    return res.writeHead(201).end("User created successfully");
  }

  if (method === "PUT" && url === "/users/1") {
    return res.end("Update user 1");
  }
   
  if (method === "PATCH" && url === "/users/1") {
        return res.end("Partial update user 1");
 }

  if (method === "DELETE" && url === "/users/1") {
    return res.end("Delete user 1");
  }

  return res.writeHead(404).end("Not Found");
});

server.listen(3333);
