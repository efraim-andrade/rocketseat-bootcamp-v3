const express = require('express');

const controllers = require('./app/controllers');

const routes = express.Router();

routes.get('/posts', controllers.PostController.index);

module.exports = routes;
