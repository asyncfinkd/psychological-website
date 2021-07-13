const router = require('express').Router();
const RegisterSchema = require('../../schema/Register/RegisterSchema');

router.route("/insertSignup").post(async (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const surname = req.body.surname;
    const password = req.body.password;

    const insertSignupSchema = new RegisterSchema({
        email,
        name,
        surname,
        password,
    })
    insertSignupSchema.save();
    res.json("insert");
})