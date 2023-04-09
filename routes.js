const routerApplication = require("./api/application-services/routes");
const routerComment = require("./api/comment-services/routes");
const { getConnection } = require('./services/database');
const { logger } = require('./services/logger');

const routes = async (server, express) => {
  await getConnection(logger);

  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use('/app', routerApplication);
  server.use('/comment', routerComment);
}

module.exports = routes;
