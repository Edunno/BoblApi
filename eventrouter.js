const controller = require('./controller');
const express = require('express');

const router = express.Router();

router.get("/getall", controller.getAllEvents);
router.get("/getbyid", controller.getEventById);
router.get("/getbydate", controller.getEventByDate);
router.get("/getbyorg", controller.getEventByOrganizer);
router.get("/getbyplace", controller.getEventByPlace);
router.get("/byuserid", controller.getEventByUserId);
router.post("/create", controller.createEvent);
router.post("/userevent", controller.createUserEvent);
router.delete("/deletebyid", controller.deleteEvent);


module.exports = router;