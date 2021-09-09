const router = require("express").Router();
const Events = require("../../../schema/events/EventsSchema");

router.route("/read/:id/:lang").get(async (req, res) => {
    let lang = req.params.lang.toString();
    Events.find({}).then((result) => {
        if(lang == "en") {
          let data = [];
          result.map((item) => {
            item.en.map((item2) => {
              if(item2.route.toString() == req.params.id.toString()) {
                data.push({
                  title: item2.title,
                  description: item2.description,
                  route: item2.route,
                  image: item2.image,
                  date: item2.date,
                })
              }
            })
          })
          res.json(data);
        } else {
          let data = [];
          result.map((item) => {
            item.ge.map((item2) => {
              if(item2.route.toString() == req.params.id.toString()) {
                data.push({
                  title: item2.title,
                  description: item2.description,
                  route: item2.route,
                  image: item2.image,
                  date: item2.date,
                })
              }
            })
          })
          res.json(data);
        }
    })
})

module.exports = router;
