const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Enable CORS for requests from localhost:3000
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173", // Replace with your frontend's actual origin
  })
);

// MongoDB Connection
mongoose
  .connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Import routes
const authRoutes = require("./routes/authroutes.js");
const usersRoutes = require("./routes/usersroutes.js");

const meetRoutes = require("./routes/meetrouter.js");
const messageRoutes = require("./routes/messageroutes.js");

// Use routes
app.use("/api/auth", authRoutes);

app.use("/api/users", usersRoutes);

app.use("/api/meet", meetRoutes);

app.use("/api/connect", messageRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
