const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

/**
 * ==> METODOS HTTP
 * 
 * GET: Busca uma informação no backend
 * POST: Criar uma informação no backend
 * PUT: Para alterar ma informação no backend
 * DELETE: Deletar uma informação no backend 
 */

 /**
  * ==> TIPOS DE PARAMETROS
  * 
  * Query Params: Parâmetros nomeados enviados na rota após o simb de ("?") (Filtros, paginação, ...);
  * Route Params: Parãmetro usado para identificar recursos;
  * Request Body: Corpo da requisição, utilizado para criar ou alterar um recurso.
  */

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;