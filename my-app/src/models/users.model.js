const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  password: { type: String },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
