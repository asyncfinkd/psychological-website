const router = require("express").Router();
const Events = require("../../../schema/events/EventsSchema");
const loginMiddleware = require("../../../middlewares/loginMiddleware");

router
  .route("/events/edit")
  .all(loginMiddleware)
  .post(async (req, res) => {
    const title = req.body.title;
    const changedTitle = req.body.changedTitle;
    const changedDescription = req.body.changedDescription;

    Events.findOne({ title: title }).then((result) => {
      result.title = changedTitle;
      result.description = changedDescription;
      result.save();
      res.json({ success: true });
    });
  });

module.exports = router;
