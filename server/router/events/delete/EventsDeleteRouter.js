const router = require("express").Router();
const Events = require("../../../schema/events/EventsSchema");
const loginMiddleware = require("../../../middlewares/loginMiddleware");

router
  .route("/delete/:id")
  .all(loginMiddleware)
  .post(async (req, res) => {
    Events.findOneAndRemove({ _id: req.body._id }, function (err) {
      if (!err) {
      } else {
      }
    }).then((result) => {
      res.json({ success: true });
    });
  });

module.exports = router;
