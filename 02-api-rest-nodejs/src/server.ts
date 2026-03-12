import fastify from "fastify";
import { db } from "./database.js";

const app = fastify();

// GET, POST, PUT, PATCH, DELETE

app.get("/hello", async (request, reply) => {
  const tables = await db("sqlite_schema").select("*");
  return tables;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server is running on http://localhost:3333");
  });
