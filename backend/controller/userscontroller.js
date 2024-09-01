const Alumni = require("../model/alumni");

const User = require("../model/user");

const getAllStudents = async (req, res) => {
  try {
    const students = await User.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getAllAlumni = async (req, res) => {
  try {
    const students = await Alumni.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const singleUser = async (req, res) => {
  const { userID } = req.params;

  try {
    // Attempt to find the user in the User collection
    let user = await User.findById(userID);

    // If the user is not found in the User collection, search in the Alumni collection
    if (!user) {
      user = await Alumni.findById(userID);
    }

    // If the user is found in either collection, return the user data
    if (user) {
      res.status(200).json(user);
    } else {
      // If the user is not found in both collections, return a 404 error
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    // Handle any errors during the process
    res.status(500).json({ message: error.message });
  }
};

const connectUser = async (req, res) => {
  const { U1ID, U2ID } = req.body;

  try {
    let user1 = await User.findById(U1ID);
    if (!user1) {
      user1 = await Alumni.findById(U1ID);
    }
    let user2 = await User.findById(U2ID);
    if (!user2) {
      user2 = await Alumni.findById(U2ID);
    }

    if (!user1 || !user2) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the connection already exists
    if (!user1.connections.includes(U2ID)) {
      user1.connections.push(U2ID);
    }
    if (!user2.connections.includes(U1ID)) {
      user2.connections.push(U1ID);
    }

    await user1.save();
    await user2.save();
    res.status(200).json({ message: "User connected successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getConnections = async (req, res) => {
  const { userId } = req.params;

  try {
    // Find the user by ID and populate the connections field
    let user = await User.findById(userId).populate("connections").exec();

    if (!user) {
      user = await Alumni.findById(userId).populate("connections").exec();
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Extract and return the populated connections
    const connections = user.connections;
    return res.status(200).json(connections);
  } catch (error) {
    console.error("Error fetching user connections:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getAllStudents,
  getAllAlumni,
  singleUser,
  connectUser,
  getConnections,
};
