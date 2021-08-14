const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const EventsSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  route: {
    type: String,
  },
  date: {
    type: String,
  },
});

const Events = mongoose.model("events", EventsSchema);

module.exports = Events;
