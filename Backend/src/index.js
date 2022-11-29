require("dotenv").config()
const express = require("express");

const cors = require("cors");
const connect = require("./config/db");
const jobRoute = require("./features/job.route");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/job", jobRoute);

app.get("/", (req, res) => {
    
  res.send("Hello");
});

app.listen(8080, async (req, res) => {
  try {
    await connect();
    console.log("http://localhost:8080");
  } catch (e) {
    res.send(e.message);
  }
});
