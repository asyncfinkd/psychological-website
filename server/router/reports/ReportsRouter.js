const router = require("express").Router();
const Reports = require("../../schema/reports/ReportsSchema");
const nodemailer = require("nodemailer");

router.route("/reports").post(async (req, res) => {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const message = req.body.message;
  const date = req.body.date;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "psychologicalwebsite@gmail.com",
      pass: "nikanikonika",
    },
  });

  const ReportsSchema = new Reports({
    fullName: fullName,
    email: email,
    message: message,
    date: date,
  });

  ReportsSchema.save();
  res.json({
    message: true,
  });
});

module.exports = router;
