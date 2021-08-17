const router = require("express").Router();
const Partners = require("../../../schema/events/EventsSchema");

router.route("/delete/partners/:id").post(async (req, res) => {
  Partners.findOneAndRemove({ router: req.body.router }, function (err) {
    if (!err) {
    } else {
    }
  }).then((result) => {
    res.json({ success: true });
  });
});

module.exports = router;
