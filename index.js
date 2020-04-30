const conn = require('./connector');
const controller = require('./controller');
const express = require('express');
const bodyparser = require('body-parser');

const port = process.env.port || 2077;

const router = express.Router();

router.get('/Event', controller.getEvents);



/*
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



conn.getSomeData().then(result =>  {
        console.log('Data send:\n' + result);
        res.send(result);
    }).catch(err => {
        console.log('Promise was rejected'+err);
    })
*/