const conn = require('./connector');
const controller = require('./controller');
const express = require('express');

const router = express.Router();

router.get('/getEvents' ,controller.getEvents);

module.exports = router;