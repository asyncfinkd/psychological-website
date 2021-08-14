const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const ReportsSchema = mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
  date: {
    type: String,
  },
});

const Reports = mongoose.model("reports", ReportsSchema);

module.exports = Reports;
