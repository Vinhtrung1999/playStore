const express = require('express');
const {
  getApplicationList,
  findOneApplication,
  addApplication,
} = require('./application-services-Controllers');
const routerApplication = express.Router();

routerApplication.get('/', getApplicationList);
routerApplication.get('/find-one-application', findOneApplication);
routerApplication.post('/add-application', addApplication);

module.exports = routerApplication;
