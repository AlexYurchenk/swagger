const express = require('express');
const app = express();
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
require('dotenv').config();
const db = require('./db/connection.db');
const PORT = process.env.PORT ?? 3000;
const booksRouter = require('./routes/books.route');
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Library API',
      version: '1.0.0',
      description: 'A Library API',
      contact: {
        name: 'Oleksiy',
        email: 'yurchenkoalex13@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/books.route.js'],
};
const specs = swaggerJsDoc(options);

app.use(cors());
app.use(express.json());

app.use('/books', booksRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

db.then(() => {
  app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`);
  });
}).catch((error) => {
  console.log(`Server not run. Error: ${error.message}`);
});
