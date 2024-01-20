const routes = require('express').Router();

const ProfessionalController = require('../controllers/professional');

routes.get('/', ProfessionalController.getData);

module.exports = routes;