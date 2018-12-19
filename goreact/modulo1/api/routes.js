const express = require('express');

const controllers = require('./app/controllers');

const routes = express.Router();

routes.get('/posts', controllers.PostController.index);
routes.post('/posts', controllers.PostController.store);

module.exports = routes;
