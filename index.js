const express = require('express');
const bodyparser = require('body-parser');
const eventroutes = require('./eventrouter');
const orgrouter = require('./organizerrouter');

const port = process.env.port || 2077;

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use('/Event', eventroutes);
app.use('/Organizer', orgrouter);



app.listen(port, () => {
    console.log('Listening on port ' + port);
})

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