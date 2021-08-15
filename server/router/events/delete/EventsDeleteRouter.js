const router = require("express").Router();
const Events = require("../../../schema/events/EventsSchema");

router.route("/delete/:id").post(async (req, res) => {
  Events.findOneAndRemove({ route: req.body.route }, function (err) {
    if (!err) {
      console.log("notif");
    } else {
      console.log("err" + " " + err);
    }
  }).then((result) => {
    console.log(result);
    res.json({ message: "cc" });
  });
});

module.exports = router;
