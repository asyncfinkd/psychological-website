const router = require("express").Router();
const loginMiddleware = require("../../../middlewares/loginMiddleware");
const About = require("../../../schema/about/AboutSchema");

router
  .route("/about/change")
  .all(loginMiddleware)
  .post(async (req, res) => {
    const changedTitle = req.body.changedTitle;
    const changedTitleEN = req.body.changedTitleEN;
    const changedDescription = req.body.changedDescription;
    const changedDescriptionEN = req.body.changedDescriptionEN;

    About.findOne({ _id: req.body._id }).then((result) => {
      console.log(result);
      result.en[0].title = changedTitleEN;
      result.ge[0].title = changedTitle;
      result.en[0].description = changedDescriptionEN;
      result.ge[0].description = changedDescription;
      result.save();
      res.json({ success: true });
    });
  });

module.exports = router;
