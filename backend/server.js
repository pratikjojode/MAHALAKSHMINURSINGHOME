const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const path = require("path");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use(morgan("dev"));

app.use(
  cors({
    origin: [],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
dotenv.config();

connectDb();
mongoose.connect(process.env.MONGO_URL);
// Routes for your API
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/feedback", require("./routes/feedBackRoute"));
app.use("/uploads", express.static("uploads"));

// Serve static files from React
app.use(express.static(path.join(__dirname, "../client/build")));

// Catch-all route for React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`.bgYellow.black);
});
