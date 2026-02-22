import fastify from 'fastify';

const app = fastify();

// GET, POST, PUT, PATCH, DELETE

app.get('/hello', (request, reply) => {
  return { message: 'Hello, World!' };
});

app.listen({
    port: 3333,
}).then(() => {
    console.log('Server is running on http://localhost:3333');     
});
