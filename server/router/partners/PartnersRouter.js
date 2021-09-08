const router = require("express").Router();
const Partners = require("../../schema/partners/PartnersSchema");

router.route("/partners").post(async (req, res) => {
  const lang = req.body.lang;

  Partners.find().then((result) => {
    if(lang == "en") {
      res.json({data: result[0].en});
    } else {
      res.json({data: result[0].ge});
    }
  });
});

module.exports = router;
