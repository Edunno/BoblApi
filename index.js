const conn = require('./connector');
const express = require('express');
const bodyparser = require('body-parser');

const port = process.env.port || 2077;

var app = express();
app.use(bodyparser.json());

app.listen(port, () => {
    console.log('Listening on port ' + port);
})

app.get('/Event', (req, res) => {
    conn.getSomeData().then(result =>  {
        console.log('Data send:\n' + result);
        res.send(result);
    }).catch(err => {
        console.log('Promise was rejected'+err);
    })
})