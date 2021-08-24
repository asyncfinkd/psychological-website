const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const ContactsSchema = mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    message: {
        type: String
    },
    date: {
        type: String
    }
})

const Contacts = mongoose.model("contacts", ContactsSchema);
module.exports = Contacts;