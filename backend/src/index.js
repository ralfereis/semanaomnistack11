/**
 * Rota / Recursos
 */

/**
 * Métodos HTTP:
 * GET: Buscar/Listar informações do back-end
 * POST:Criar uma informação do back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deletar uma informação do back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
 * Route Params: parâmetros utilizados para identificar recursos
 * Request Body: corpo da requisição utilizado para criar e/ou alterar recursos 
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB;
 */

/**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */

const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);