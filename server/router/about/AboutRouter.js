const router = require("express").Router();
const About = require("../../schema/about/AboutSchema");

router.route("/about").post(async (req, res) => {
  About.find().then((result) => {
    let data = [];
    result.map((item) => {
      data.push({
        title: item.title,
        description: item.description
      });
    });
    res.json(data);
  });
})

module.exports = router;
