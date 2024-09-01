const Meeting = require("../model/meet.js");

const addMeet = async (req, res) => {
  try {
    const { startTime, meetingLink, meetingTopic, userID } = req.body;

    // Create a new meeting document
    const newMeeting = new Meeting({
      startTime,
      meetingLink,
      meetingTopic,
      UID: userID,
    });

    // Save the meeting to the database
    const savedMeeting = await newMeeting.save();

    // Send back the saved meeting
    res.status(201).json(savedMeeting);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

const getMeets = async (req, res) => {
  try {
    // Calculate the time 12 hours ago from now
    const twelveHoursAgo = new Date(Date.now() - 12 * 60 * 60 * 1000);

    // Find meetings that were created or scheduled in the last 12 hours
    const meetings = await Meeting.find({
      createdAt: { $gte: twelveHoursAgo },
    }).populate("UID"); // Populate the UID field with user data

    res.status(200).json(meetings);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { addMeet, getMeets };
