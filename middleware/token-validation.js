const jwt = require('jsonwebtoken');
const { privateKey } = require('../services/config');

const tokenValidation = async (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.json({
        errorCode: 1,
        message: 'token should be in header',
      });
    }

    const data = jwt.verify(token, privateKey);

    req.user = data;

    next();
  } catch (error) {
    return res.json({
      errorCode: 1,
      message: error.message,
    });
  }
}

module.exports = {
  tokenValidation,
}
