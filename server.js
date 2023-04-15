const express = require('express');
const routes = require('./routes');
const server = express();
const { serverConfig } = require("./services/config");
const cors = require('cors');

server.use(cors());
// run server
routes(server, express);

server.listen(serverConfig, () => console.log(`
-----------------------------------------------------------------------
    API server running at: http://localhost:${serverConfig.port}
    Runtime environment: ${serverConfig.environment}
-----------------------------------------------------------------------
`));

/*
@----------------
@ app test
@----------------
*/
const app = express();

app.use(cors());
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    return res.render('gglogin')
})
app.listen(5000, () => console.log(`
-----------------------------------------------------------------------
    API server running at: http://localhost:5000
-----------------------------------------------------------------------
`));