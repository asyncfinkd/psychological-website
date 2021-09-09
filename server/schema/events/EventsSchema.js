const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const EventsSchemas = mongoose.Schema({
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
})

const EventsSchema = mongoose.Schema({
  en: [EventsSchemas],
  ge: [EventsSchemas]
});

const Events = mongoose.model("events", EventsSchema);

module.exports = Events;
