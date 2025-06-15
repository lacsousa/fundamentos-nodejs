// const http = require('http');
// CommonJS -> require, but today we use ES6 import

import http from "node:http";

// GET, POST, PUT, PATCH, DELETE
// HTTP methods
// http://localhost:3333

// GET -> Read data from backend
// POST -> Create data in backend
// PUT -> Update data in backend
// PATCH -> Partial update data in backend
// DELETE -> Delete data in backend

const server = http.createServer((req, res) => {
  
  const { method, url } = req;

  console.log(method, url);

  if (method === "GET" && url === "/users") {
    // Early return to avoid unnecessary processing
    return res.end("List of users");
  }

  if (method === "POST" && url === "/users") {
    return res.end("Create user");
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

  return res.end("Hello Luciano Cordeiro!");
});

server.listen(3333);
