require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
const cors = require("cors");

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://share-it-front-end-html.vercel.app"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.static("public"));

const connectDB = require("./config/db");
connectDB();

app.use(express.json());

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// // Routes
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/files/download", require("./routes/download"));
app.listen(PORT, console.log(`Listening on port ${PORT}.`));
