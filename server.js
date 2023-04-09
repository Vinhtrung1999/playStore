const express = require('express');
const routes = require('./routes');
const server = express();
const { serverConfig } = require("./services/config");

// run server
routes(server, express);

server.listen(serverConfig, () => console.log(`
-----------------------------------------------------------------------
    API server running at: http://localhost:${serverConfig.port}
    Runtime environment: ${serverConfig.environment}
-----------------------------------------------------------------------
`));