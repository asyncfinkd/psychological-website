const router = require("express").Router();
const About = require("../../../schema/about/AboutSchema");

router.route("/about/change").post(async (req, res) => {
  const title = req.body.title;
  const changedTitle = req.body.changedTitle;
  const changedDescription = req.body.changedDescription;

  About.findOne({ title: title }).then((result) => {
    result.title = changedTitle;
    result.description = changedDescription;
    result.save();
    res.json({success: true});
  })
})

module.exports = router;
