const router = require("express").Router();
const Events = require("../../../schema/events/EventsSchema");
const loginMiddleware = require("../../../middlewares/loginMiddleware");

router
  .route("/events/edit")
  .all(loginMiddleware)
  .post(async (req, res) => {
    const changedTitle = req.body.changedTitle;
    const changedTitleEN = req.body.changedTitleEN;
    const changedDescription = req.body.changedDescription;
    const changedDescriptionEN = req.body.changedDescriptionEN;

    Events.findOne({ _id: req.body._id }).then((result) => {
      result.ge[0].title = changedTitle;
      result.en[0].title = changedTitleEN;
      result.ge[0].description = changedDescription;
      result.en[0].description = changedDescriptionEN;
      result.save();
      res.json({ success: true });
    });
  });

module.exports = router;
