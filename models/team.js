const mongoose = require("mongoose");
const { Schema } = mongoose;

const teamSchema = new Schema({
  abbreviation: String,
  city: String,
  conference: String,
  division: String,
  full_name: String,
  name: String,
});

module.exports = mongoose.model("Team", teamSchema);
