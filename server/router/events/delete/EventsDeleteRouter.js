const router = require("express").Router();
const Events = require("../../../schema/events/EventsSchema");
const loginMiddleware = require("../../../middlewares/loginMiddleware");

router
  .route("/delete/:id")
  .all(loginMiddleware)
  .post(async (req, res) => {
    Events.findOneAndRemove({ route: req.body.route }, function (err) {
      if (!err) {
      } else {
      }
    }).then((result) => {
      res.json({ success: true });
    });
  });

module.exports = router;
