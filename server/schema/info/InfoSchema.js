const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const InfoSchema = mongoose.Schema({
  title: { type: String },
  subTitle: { type: String },
});

const Info = mongoose.model("infos", InfoSchema);
module.exports = Info;
