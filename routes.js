const conn = require('./connector');
const controller = require('./controller');
const express = require('express');

const router = express.Router();

router.get("/getAll", controller.getEvents);
router.post("/create" ,controller.createEvent);

module.exports = router;