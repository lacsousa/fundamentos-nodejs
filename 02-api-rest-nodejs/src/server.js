"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = require("fastify");
var app = (0, fastify_1.default)();
// GET, POST, PUT, PATCH, DELETE
app.get('/hello', function (request, reply) {
    return { message: 'Hello, World!' };
});
app.listen({
    port: 3333,
}).then(function () {
    console.log('Server is running on http://localhost:3333');
});
