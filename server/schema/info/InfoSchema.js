const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const Infos = mongoose.Schema({
  title: { type: String },
  subTitle: { type: String },
  role: { type: String },
  username: { type: String },
});

const InfoSchema = mongoose.Schema({
  combine: { type: Boolean },
  title: { type: String },
  subTitle: { type: String },
  image: { type: String },
  info: [Infos],
});

const Info = mongoose.model("infos", InfoSchema);
module.exports = Info;
