const mongoose = require("mongoose");

const userRegister = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("User", userRegister);