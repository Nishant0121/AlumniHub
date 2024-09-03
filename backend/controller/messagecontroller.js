const Conversation = require("../model/conversation.js");
const Message = require("../model/message.js");

const SendMessage = async (req, res) => {
  try {
    const { message, receiverID, senderId } = req.body;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverID] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverID],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverID,
      message,
    });

    await newMessage.save();

    conversation.messages.push(newMessage._id);
    await conversation.save();

    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const GetMessage = async (req, res) => {
  try {
    const { senderId, receiverID } = req.body;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverID] },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).send([]);
    }

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { SendMessage, GetMessage };
