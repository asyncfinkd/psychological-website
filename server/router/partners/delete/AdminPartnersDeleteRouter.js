const router = require("express").Router();
const Partners = require("../../../schema/events/EventsSchema");

router.route("/partners/delete").post(async (req, res) => {
  const title = req.body.title;

  Partners.findOneAndRemove({ title: title }, function (err) {
    if (!err) {
    } else {
    }
  }).then((result) => {
    res.json({ success: true });
  });
});

module.exports = router;
