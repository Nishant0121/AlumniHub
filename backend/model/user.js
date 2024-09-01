const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
  degreePursuing: {
    type: String,
    required: true,
    trim: true,
  },
  expectedOrActualGraduationYear: {
    type: Number,
    required: true,
  },
  interests: {
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
    default: "", // Defaults to an empty string
  },
  profilePic: {
    type: String, // URL to the profile picture
    default: "", // Defaults to an empty string if no profile picture is provided
  },
  achievements: {
    type: [String], // Array of strings to store multiple achievements
    default: [], // Defaults to an empty array
  },
  userType: {
    type: String,
    default: "user",
  },
  connections: [{ type: mongoose.Schema.Types.ObjectId, ref: "Alumni" }], // Array of user IDs
});

const User = mongoose.model("User", userSchema);

module.exports = User;
