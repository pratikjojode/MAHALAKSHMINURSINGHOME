const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
// rest object
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));

dotenv.config();

// mongo connection
connectDb();

// routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/feedback", require("./routes/feedBackRoute"));
app.use("/uploads", express.static("uploads"));

// port
const port = process.env.PORT || 8080;

// listen on port
app.listen(port, () => {
  console.log(
    `Server running on development mode ${process.env.PORT}`.bgYellow.black
  );
});
