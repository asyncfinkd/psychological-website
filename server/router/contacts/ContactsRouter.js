const router = require("express").Router();
const ContactsSchema = require("../../schema/contacts/ContactsSchema");

router.route("/contacts").post(async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;
    const date = req.body.date;

    const Contacts = new ContactsSchema({
        username: username,
        email: email,
        phone: phone,
        message: message,
        date: date,
    })
    Contacts.save();
    res.json({message: true});
})

module.exports = router;