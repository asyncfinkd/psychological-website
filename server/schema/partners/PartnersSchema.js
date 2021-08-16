const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const PartnersSchema = mongoose.Schema({
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
});

const Partners = mongoose.model("partners", PartnersSchema);

module.exports = Partners;
