import { randomUUID } from 'node:crypto';
import { Database } from './database.js';
import { buildRoutePath } from './utils/build-route-path.js';

const database = new Database();

// Route parameters example: /users/:id
// Request body example: { "name": "Luciano", "email": "
// Query parameters example: /users/search?name=Luciano

export const routes = [
  {
    method: 'GET',  
    path: buildRoutePath('/users'),
    handler: (req, res) => {

      console.log(req.query);
      
      const users = database.select("users");
      return res.end(JSON.stringify(users));
    }
  },
  {
    method: 'POST', 
    path: buildRoutePath('/users'),
    handler: async (req, res) => {
     const { name, email } = req.body;
    
        const user = { 
          id: randomUUID(), 
          name,
          email
        };
    
        await database.insert("users", user);
    
        return res.writeHead(201).end("User created successfully");
    }
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/users/:id'),
    handler: (req, res) => {

      const { id } = req.params;
      console.log(req.params);

      database.delete('users', id);

      return res.writeHead(204).end(); // Success answer without content
    }
  },
  {
    method: 'PUT',
    path: buildRoutePath('/users/:id'),
    handler: (req, res) => {

      const { id } = req.params;
      const { name, email } = req.body;

      console.log(req.params);

      database.update('users', id, {
        name,
        email
      });

      return res.writeHead(204).end(); // Success answer without content
    }
  }
]

