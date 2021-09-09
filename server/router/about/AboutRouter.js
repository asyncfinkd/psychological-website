const router = require("express").Router();
const About = require("../../schema/about/AboutSchema");

router.route("/about").post(async (req, res) => {
  const lang = req.body.lang;

  About.find().then((result) => {
    if(lang == "en") {
      let data = [];
      result.map((item) => {
        item.en.map((item2) => {
          data.push({
            title: item2.title,
            description: item2.description
          })
        })
      })
      res.json(data);
    } else {
      let data = [];
      result.map((item) => {
        item.ge.map((item2) => {
          data.push({
            title: item2.title,
            description: item2.description
          })
        })
      })
      res.json(data);
    }
  });
})

module.exports = router;
