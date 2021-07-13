const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const RegisterSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
})

const Register = mongoose.model("users", RegisterSchema);
module.exports = Register;