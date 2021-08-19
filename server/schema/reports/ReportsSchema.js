const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const ReportsSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
});

const Reports = mongoose.model("reports", ReportsSchema);

module.exports = Reports;
