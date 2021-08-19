const router = require("express").Router();
const Reports = require("../../schema/reports/ReportsSchema");
const nodemailer = require("nodemailer");
const loginMiddleware = require("../../middlewares/loginMiddleware");

router.route("/reports").post(async (req, res) => {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const message = req.body.message;
  const date = req.body.date;

  Reports.find().then((res2) => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "psychologicalwebsite@gmail.com",
        pass: "nikanikonika",
      },
    });

    let mailOptions = {
      from: `psychologicalwebsite@gmail.com`,
      to: `${email}`,
      subject: `#${
        res2.length + 1
      } შეტყობინება (შეფერხებაზე) - ${message.substr(0, 30)}...`,
      html: `
        <p>სახელი გვარი: ${fullName}</p>
        <p>ელექტრონული ფოსტა: ${email}</p>
        <p>შეტყობინება: ${message}</p>
        `,
    };

    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log("error occurs: ", err);
      } else {
        console.log("email sent");
      }
    });
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

router
  .route("/getall/reports")
  .all(loginMiddleware)
  .post(async (req, res) => {
    Reports.find().then((res2) => {
      let data = [];
      res2.map((item) => {
        data.push({
          fullName: item.fullName,
          date: item.date,
          email: item.email,
          message: item.message,
        });
      });
      res.json({ data: data });
    });
  });

module.exports = router;
