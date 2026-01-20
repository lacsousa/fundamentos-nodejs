Install NodeJS

    - https://efficient-sloth-d85.notion.site/Instalando-o-Node-e-o-NPM-d162e2582d5c48499bc6703526912456


Install HTTPIE

 - https://httpie.io/docs/cli/installation


Some examples for using HTTPIE: 

~/projects/Rocketseat/fundamentos-nodejs$ http GET localhost:3333/users
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 13
Date: Thu, 26 Jun 2025 12:17:27 GMT
Keep-Alive: timeout=5

List of users


projects/Rocketseat/fundamentos-nodejs$ http POST localhost:3333/users
HTTP/1.1 201 Created
Connection: keep-alive
Date: Fri, 27 Jun 2025 19:01:32 GMT
Keep-Alive: timeout=5
Transfer-Encoding: chunked

User created successfully


****** Some annotations ******

const http = require('http');
CommonJS -> require, but today we use ES6 import

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

// There are 3 ways to send data from client to server
// 1. Query Params -> /users?name=Bruno&age=18 (used in GET requests, accessible via req.url)
//        URLs Stateful => Filters, Pagination, Sorting, Non obligatory data

// 2. Route Params -> /users/1 (used in PUT, PATCH, DELETE requests, accessible via req.url)
//      URLs Stateless => Identify a resource

// 3. Request Body -> Used in POST, PUT, PATCH requests (accessible via req body)
//      Request Body => Send data to the API





****** Some annotations ******
