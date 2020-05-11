const controller = require('./controller');
const express = require('express');

const router = express.Router();

router.get("/getall", controller.getAllEvents);
router.post("/create" ,controller.createEvent);
router.post("/userevent", controller.createUserEvent);

module.exports = router;