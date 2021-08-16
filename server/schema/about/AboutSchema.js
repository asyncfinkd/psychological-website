const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const AboutSchema = mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  }
})

const About = mongoose.model("abouts", AboutSchema);

module.exports = About;
