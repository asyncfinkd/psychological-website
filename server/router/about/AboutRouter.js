const router = require("express").Router();
const About = require("../../schema/about/AboutSchema");

router.route("/about").post(async (req, res) => {
  About.find().then((result) => {
    res.json({ data: result });
  });
});

module.exports = router;
