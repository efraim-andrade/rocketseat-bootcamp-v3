const express = require('express');
const cors = require('cors');

const controllers = require('./app/controllers');

const routes = express.Router();

routes.get('/posts', cors(), controllers.PostController.index);
routes.post('/posts', cors(), controllers.PostController.store);

module.exports = routes;
