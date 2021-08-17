const router = require("express").Router();
const Partners = require("../../../schema/partners/PartnersSchema");

router.route("/delete/partners/:id").post(async (req, res) => {
  Partners.findOneAndRemove({ router: req.body.router }, function (err) {
    if (!err) {
    } else {
    }
  }).then((result) => {
    res.json({ success: true });
  });
});

module.exports = router;
