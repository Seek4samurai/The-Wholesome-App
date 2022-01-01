const route = require('express').Router();
const controller = require('../controller/controller');

// Routes
route.get('/', controller.home);

module.exports = route;