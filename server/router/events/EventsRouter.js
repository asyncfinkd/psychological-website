const router = require("express").Router();
const Events = require("../../schema/events/EventsSchema");

router.route("/events").post(async (req, res) => {
  Events.find().then((res2) => {
    let data = [];
    res2.map((item) => {
      data.push({
        title: item.title,
        description: item.description,
        image: item.image,
        route: item.route,
        date: item.date,
      });
    });
    res.json(data);
  });
});

module.exports = router;
