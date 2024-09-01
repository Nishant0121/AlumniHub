const express = require("express");
const router = express.Router();

const { addMeet, getMeets } = require("../controller/meetcontroller.js");

router.post("/add", addMeet);

router.get("/get", getMeets);

module.exports = router;
