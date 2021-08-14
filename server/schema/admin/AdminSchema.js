const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const AddedPosts = mongoose.Schema({
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

const AdminSchema = mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
  },
  addedPosts: [AddedPosts],
});

const Admin = mongoose.model("admins", AdminSchema);
module.exports = Admin;
