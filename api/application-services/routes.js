const express = require('express');
const { checkFileUpload } = require('../../middleware/upload-file');
const {
  getApplicationList,
  findOneApplication,
  addApplication,
  findApplicationObject,
  updateApplication,
} = require('./application-services-Controllers');
const routerApplication = express.Router();
const multer = require('multer');
const uploadFile = multer({ dest: './asset' });
const cpUpload = uploadFile.fields([{ name: 'resource', maxCount: 1 }, { name: 'images', maxCount: 4 }])

routerApplication.get('/', getApplicationList);
routerApplication.get('/find-one-application', findOneApplication);
routerApplication.get('/find-application-obj', findApplicationObject);
routerApplication.post('/add-application', cpUpload, checkFileUpload, addApplication);
routerApplication.post('/update-application', updateApplication);

module.exports = routerApplication;
