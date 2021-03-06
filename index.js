const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const eventroutes = require('./eventrouter');
const orgrouter = require('./organizerrouter');

const port = process.env.port || 2077;

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use('/api/Event', eventroutes);
app.use('/api/Organizer', orgrouter);

app.all("*", (req, res, next) => {
    console.log("Cannot find the specified route: " + req.route.path);
    console.log("You have connected to the API, but the url is invalid.")
    next();
});

app.use(async function (err, req, res, next) {
    if (!err) {
        return next();
    }
    // console.log(err)
    // show error response on page for clients who get an error
    res
        .status(err.httpStatusCode || 500)
        .send({ error: "Oops! An error has occurred." });
});

app.listen(port, () => {
    console.log('Listening on port ' + port);
})
