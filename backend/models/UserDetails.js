const mongoose = require("mongoose");
const moment = require("moment-timezone");


const foodSchema = new mongoose.Schema({
  summary: { type: String },
  CalorieResponse: { type: String }, 
  base64Image: { type: String }, // ✅ Add this to store image
  createdAt: {
      type: String,
      default: () => moment().tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss")
  }
});


const userDetailsSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String,
  gender: String,
  age: Number,
  height: Number,
  weight: Number,
  state: String,
  sleepHours: Number,
  healthIssues: [String],
  food: [foodSchema], 
});

module.exports = mongoose.model("UserDetails", userDetailsSchema);
