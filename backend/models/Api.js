const mongoose = require("mongoose");

const ApiSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  endpoint: {
    type: String,
  },
  imgFile: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("api", ApiSchema);
