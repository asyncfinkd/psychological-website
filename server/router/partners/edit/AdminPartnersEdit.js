const router = require("express").Router();
const Partners = require("../../../schema/partners/PartnersSchema");

router.route("/partners/change").post(async (req, res) => {
  const title = req.body.title;
  const changedTitle = req.body.changedTitle;
  const changedRoute = req.body.changedRoute;

  Partners.findOne({ title: title }).then((result) => {
    result.title = changedTitle;
    result.route = changedRoute;
    result.save();
    res.json({ success: true });
  });
});

module.exports = router;
