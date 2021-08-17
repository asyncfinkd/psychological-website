const router = require("express").Router();
const Partners = require("../../schema/partners/PartnersSchema");

router.route("/partners").post(async (req, res) => {
  Partners.find().then((result) => {
    let data = [];
    result.map((item) => {
      data.push({
        image: item.image,
        route: item.route,
        title: item.title,
        type: item.type,
        router: item.router,
      });
    });
    res.json(data);
  });
});

module.exports = router;
