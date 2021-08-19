const router = require("express").Router();
const loginMiddleware = require("../../../middlewares/loginMiddleware");
const About = require("../../../schema/about/AboutSchema");

router
  .route("/about/change")
  .all(loginMiddleware)
  .post(async (req, res) => {
    const title = req.body.title;
    const changedTitle = req.body.changedTitle;
    const changedDescription = req.body.changedDescription;

    About.findOne({ title: title }).then((result) => {
      result.title = changedTitle;
      result.description = changedDescription;
      result.save();
      res.json({ success: true });
    });
  });

module.exports = router;
