const express = require('express');
const { userLogin } = require('./user-services-controllers');
const routerUser = express.Router();

routerUser.post('/user-login', userLogin);

module.exports = routerUser;
