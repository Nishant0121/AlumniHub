const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/user.js");
const Alumni = require("../model/alumni.js");

const registerUser = async (req, res) => {
  const {
    name,
    institution,
    degreePursuing,
    expectedOrActualGraduationYear,
    interests,
    mobile,
    email,
    password,
    socialAccounts, // Optional fields
    profilePic,
    achievements,
  } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      institution,
      degreePursuing,
      expectedOrActualGraduationYear,
      interests,
      mobile,
      email,
      password: hashedPassword,
      socialAccounts: socialAccounts || "", // Optional fields
      profilePic: profilePic || "",
      achievements: achievements || [],
    });

    // Save user to the database
    await newUser.save();

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      user,
      message: "User logged in successfully",
      token,
    });
  } catch (error) {
    console.error("Login error:", error); // Log the error details
    return res
      .status(500)
      .json({ message: "Server error", error: error.message || error });
  }
};

const registerAlumni = async (req, res) => {
  const {
    name,
    institution,
    company,
    degree,
    yearOfGraduation,
    expertise,
    mobile,
    email,
    password,
    socialAccounts,
    profilePic,
    careerPath,
    achievements,
  } = req.body;

  console.log("Received registration request:", req.body); // Log request data

  try {
    // Check if alumni already exists
    const userExists = await Alumni.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new alumni
    const newAlumni = new Alumni({
      name,
      institution,
      company: company || "",
      degree,
      yearOfGraduation,
      expertise: Array.isArray(expertise)
        ? expertise
        : expertise.split(",").map((exp) => exp.trim()),
      mobile,
      email,
      password: hashedPassword,
      socialAccounts: socialAccounts || "",
      profilePic: profilePic || "",
      careerPath: careerPath || "",
      achievements: Array.isArray(achievements)
        ? achievements
        : achievements.split(",").map((ach) => ach.trim()) || "[]",
    });

    // Save alumni to the database
    await newAlumni.save();

    return res.status(201).json({ message: "Alumni registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error.message || error); // Log error details
    return res.status(500).json({ message: "Server error", error });
  }
};

const loginAlumni = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await Alumni.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      user,
      message: "User logged in successfully",
      token,
    });
  } catch (error) {
    console.error("Login error:", error); // Log the error details
    return res
      .status(500)
      .json({ message: "Server error", error: error.message || error });
  }
};

module.exports = { loginUser, loginAlumni, registerAlumni, registerUser };
