const express = require("express");
const {
  registerUser,
  loginUser,
  registerAlumni,
  loginAlumni,
} = require("../controller/authcontroller.js");

const router = express.Router();

// Register route
router.post("/register/user", registerUser);

// Login route
router.post("/login/user", loginUser);

router.post("/register/alumni", registerAlumni);

// Login route
router.post("/login/alumni", loginAlumni);

module.exports = router;
