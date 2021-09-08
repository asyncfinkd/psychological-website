const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const PartnersSchemaForLanguage = mongoose.Schema({
  image: {
    type: String,
  },
  route: {
    type: String,
  },
  title: {
    type: String,
  },
  type: {
    type: String,
  },
})

const PartnersSchema = mongoose.Schema({
  en: [PartnersSchemaForLanguage],
  ge: [PartnersSchemaForLanguage]
});

const Partners = mongoose.model("partners", PartnersSchema);

module.exports = Partners;
