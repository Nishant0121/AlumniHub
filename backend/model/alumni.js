const mongoose = require("mongoose");

const alumniSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  institution: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
    type: String,
    trim: true,
    default: "", // Optional field
  },
  degree: {
    type: String,
    required: true,
    trim: true,
  },
  yearOfGraduation: {
    type: Number,
    required: true,
  },
  expertise: {
    type: [String],
    required: true,
  },
  mobile: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: [/^\d{10}$/, "Please enter a valid 10-digit mobile number"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: true,
  },
  socialAccounts: {
    type: String,
    default: "", // Optional field
  },
  profilePic: {
    type: String, // URL to the profile picture
    default: "", // Optional field
  },
  careerPath: {
    type: String,
    default: "", // Optional field
  },
  achievements: {
    type: [String], // Array of strings to store multiple achievements
    default: [], // Optional field
  },
  userType: {
    type: String,
    default: "alumni",
  },
  connections: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Alumni = mongoose.model("Alumni", alumniSchema);

module.exports = Alumni;
