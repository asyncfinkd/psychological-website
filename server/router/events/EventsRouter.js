const router = require("express").Router();
const Events = require("../../schema/events/EventsSchema");

router.route("/events").post(async (req, res) => {
  const lang = req.body.lang;

  Events.find().then((res2) => {
    res.json(res2);
  });
});

module.exports = router;
