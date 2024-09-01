const express = require("express");

const router = express.Router();
const {
  getAllStudents,
  getAllAlumni,
  singleUser,
  connectUser,
  getConnections,
} = require("../controller/userscontroller.js");

router.get("/get/student", getAllStudents);
router.get("/get/alumni", getAllAlumni);

router.get("/get/user/:userID", singleUser);

router.post("/add/connection", connectUser);

router.get("/get/user/connection/:userId", getConnections);

module.exports = router;
