const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({
  startTime: {
    type: String,
    required: true,
  },
  meetingLink: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(v);
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  meetingTopic: {
    type: String,
    required: true,
    maxlength: 100,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  UID: { type: mongoose.Schema.Types.ObjectId, ref: "Alumni" },
});

const Meeting = mongoose.model("Meet", meetingSchema);

module.exports = Meeting;
