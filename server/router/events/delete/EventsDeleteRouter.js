const router = require("express").Router();
const Events = require("../../../schema/events/EventsSchema");

router.route("/delete/:id").post(async (req, res) => {
  Events.findOneAndRemove({ route: req.body.route }, function (err) {
    if (!err) {
    } else {
    }
  }).then((result) => {
    res.json({ success: true });
  });
});

module.exports = router;
