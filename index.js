const conn = require('./connector');
const express = require('express');
const bodyparser = require('body-parser');

const port = process.env.port || 2077;

var app = express();
app.use(bodyparser.json());

app.listen(port, () => {
    console.log('Listening on port '+port);
})

app.get('/Event', (req,res) =>{
    var data = conn.getSomeData();
    console.log('Data send:\n'+ data);
    res.send(data);
})