const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const ResourcesSchema = Schema({
  url: { type: String },
});

const Resources = mongoose.model("resources", ResourcesSchema);

module.exports = Resources;
