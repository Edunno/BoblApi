const controller = require('./controller');
const express = require('express');

const router = express.Router();

router.post("/create", controller.createOrganizer);
router.get("/getall", controller.getAllOrg);
router.get("/getbyid", controller.getOrgByUserID);
router.post("/createuser", controller.createUser);
router.get("/countparticipants", controller.getUserByEventId)

module.exports = router;
