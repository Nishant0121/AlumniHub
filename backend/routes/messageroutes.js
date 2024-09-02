const express = require("express");
const { SendMessage, GetMessage } = require("../controller/messagecontroller");

const router = express.Router();

router.post("/send/message", SendMessage);

router.post("/get/message", GetMessage);

module.exports = router;
