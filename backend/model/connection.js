const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the User Schema
const connectionSchema = new Schema(
  {
    UID: { type: Schema.Types.ObjectId, ref: "User" },
    connections: [{ type: Schema.Types.ObjectId, ref: "User" }], // Array of user IDs
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

// Create the User model
const Connection = mongoose.model("Connection", connectionSchema);

module.exports = Connection;
