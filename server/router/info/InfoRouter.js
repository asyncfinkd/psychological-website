const router = require("express").Router();
const InfoSchema = require("../../schema/info/InfoSchema");

router.route("/get/info").get(async (req, res) => {
  InfoSchema.find().then((result) => {
    res.json(result);
  });
});

router.route("/change/info").post(async (req, res) => {
  InfoSchema.findOne({ title: req.body.title }).then((result) => {
    result.subTitle = req.body.subTitle;
    result.save();
  });
  res.json({ success: true });
});

module.exports = router;
