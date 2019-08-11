const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('../db/mongoose');

const { EmployeeRoutes } = require('../routes/employee-routes');

let app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept, content-type, application/json, Authorization');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Root:
app.get('/', (req, res) => res.send(`Up and listen on port ${port}`));

// Create our Express router
let router = express.Router();

// Register all our routes beneath /occupationalHealth:
app.use('/fake-data', router);

// Companies:
router.use('/api', EmployeeRoutes.getPaths());

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = { app };
