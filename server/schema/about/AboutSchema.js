const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const AboutSchemas = mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  }
})

const AboutSchema = mongoose.Schema({
  en: [AboutSchemas],
  ge: [AboutSchemas]
})

const About = mongoose.model("abouts", AboutSchema);

module.exports = About;
