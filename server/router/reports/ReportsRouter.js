const router = require("express").Router();
const Reports = require("../../schema/reports/ReportsSchema");

router.route("/reports").post(async (req, res) => {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const message = req.body.message;
  const date = req.body.date;

  const ReportsSchema = new Reports({
    fullName: fullName,
    email: email,
    message: message,
    date: date,
  });

  ReportsSchema.save();
  res.json("1");
});

module.exports = router;
