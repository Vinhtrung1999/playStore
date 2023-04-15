const fs = require('fs');
const application = require('../models/application');
const { createFolderName } = require('../services/utils');

const checkFileUpload = (req, res, next) => {
  try {
    const apkFile = req.files?.resource || [];
    const imgList = req.files?.images || [];
    const applicationName = req.body?.name || '';
    if (apkFile.length === 0 || imgList.length === 0 || applicationName.length === 0) {
      return res.json({
        errorCode: 1,
        message: 'wrong format',
      });
    }

    const folderName = createFolderName(applicationName);
    const destination = apkFile[0].destination + `/${folderName}/`;
    fs.mkdirSync(destination);
    fs.renameSync(apkFile[0].path, destination + apkFile[0].originalname);
    req.body.resource = `${folderName}/${apkFile[0].originalname}`;

    const images = [];
    imgList.forEach(img => {
      fs.renameSync(img.path, destination + img.originalname);
      images.push(`${folderName}/${img.originalname}`);
    });
    req.body.images = images;

    next();
  } catch (error) {
    return res.json({
      errorCode: 1,
      message: error.message,
    });
  }
}

module.exports = {
  checkFileUpload,
}