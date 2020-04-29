const express = require('express');
const bodyparser = require('body-parser');

const port = process.env.port || 8080;

var app = express();
app.use(bodyparser.json());

app.listen(port, () => console.log('Listening on port ${port}..'));