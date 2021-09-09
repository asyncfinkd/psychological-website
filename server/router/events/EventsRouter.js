const router = require("express").Router();
const Events = require("../../schema/events/EventsSchema");

router.route("/events").post(async (req, res) => {
  const lang = req.body.lang;

  Events.find().then((res2) => {
    if(lang == "en") {
      let data = [];
      res2.map((item) => {
        item.en.map((item2) => {
          data.push({
            title: item2.title,
            description: item2.description,
            image: item2.image,
            route: item2.route,
            date: item2.date
          })
        })
      })
      res.json(data);
    } else {
      let data = [];
      res2.map((item) => {
        item.ge.map((item2) => {
          data.push({
            title: item2.title,
            description: item2.description,
            image: item2.image,
            route: item2.route,
            date: item2.date
          })
        })
      })
      res.json(data);
    }
  });
});

module.exports = router;
