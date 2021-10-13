const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const ResourcesSchema = mongoose.Schema({
  url: { type: String },
});

const Resources = mongoose.model("resources", ResourcesSchema);

module.exports = Resources;
