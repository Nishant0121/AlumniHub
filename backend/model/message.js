const { default: mongoose } = require("mongoose");

const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  receiverID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  message: { type: String, required: true },
  sentAt: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
