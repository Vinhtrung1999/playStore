const { databaseConfig } = require('../services/config');
const mongoose = require('mongoose');

const getConnection = async (logger) => {
  try {
    const uri = `mongodb+srv://${databaseConfig.dbUserName}:${databaseConfig.dbPassword}@${databaseConfig.dbCluster}.zpsw0.mongodb.net/${databaseConfig.dbName}?retryWrites=true&w=majority`;
    const connection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    logger.info('connect mongodb successfully');
    return connection
  } catch (error) {
    logger.error('connect mongodb fail');
    throw new Error(error);
  }
}

module.exports = {
  getConnection,
};
