const router = require("express").Router();
const Partners = require("../../schema/partners/PartnersSchema");

router.route("/partners").post(async (req, res) => {
  Partners.find().then((result) => {
    res.json(result);
  });
});

module.exports = router;
