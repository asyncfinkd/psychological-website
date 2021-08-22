const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const LogsSchema = mongoose.Schema({
  IP: {
    type: String,
  },
  status: {
    type: String,
  },
  email: {
    type: String,
  },
});

const Logs = mongoose.model("logs", LogsSchema);
module.exports = Logs;
