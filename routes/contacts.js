const routes = require('express').Router();

const ProfessionalController = require('../controllers/contacts');

routes.get('/', ProfessionalController.getData);

module.exports = routes;