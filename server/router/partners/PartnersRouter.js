const router = require("express").Router();
const Partners = require("../../schema/partners/PartnersSchema");

router.route("/partners").post(async (req, res) => {
  const lang = req.body.lang;

  Partners.find().then((result) => {
    if(lang == "en") {
      let data = [];
      result.map((item) => {
        item.en.map((item2) => {
          data.push({
            title: item2.title,
            route: item2.route,
            image: item2.image,
            type: item2.type
          })
        })
      })
      res.json({data: data});
    } else {
      let data = [];
      result.map((item) => {
        item.ge.map((item2) => {
          data.push({
            title: item2.title,
            route: item2.route,
            image: item2.image,
            type: item2.type
          })
        })
    })
    res.json({data: data});
    }
  });
});

module.exports = router;
