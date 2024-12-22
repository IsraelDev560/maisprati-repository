const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const bodyParser = require('body-parser');
const express = require("express");
const app = express();

app.use(bodyParser.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

const port = 3000;

app.listen(port, () => {
  console.log(`Server successfully connected to port ${port}.`);
});

require('./endpoints')(app);