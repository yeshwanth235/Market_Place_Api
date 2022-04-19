require("dotenv").config();
const mongo_url = process.env.MONGODB;

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const user = require("./routes/user");
const image = require("./routes/image");
const api = require("./routes/apiData");
const cors = require("cors");

console.log(`mongo_url ${mongo_url}`);
mongoose
  .connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongoose is connected successfully");
  })
  .catch((e) => {
    console.log(e);
  });

const app = express();
const PORT = process.env.PORT || 5050;
app.use(cors());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.get("/", (req, res) => {
  res.send("Server side");
});

app.use("/", user);
app.use("/", image);
app.use("/", api);

app.listen(PORT, () => {
  console.log(`Serving on the port ${PORT}`);
});
