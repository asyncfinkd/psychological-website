const router = require("express").Router();
const Partners = require("../../../schema/partners/PartnersSchema");

router.route("/partners/change").post(async (req, res) => {
  const title = req.body.title;
  const changedTitle = req.body.changedTitle;
  const changedRoute = req.body.changedRoute;
  const type = req.body.type;
  if (type === "url") {
    var changedURL = req.body.url;
  } else {
    var changedUpload = req.body.changedUpload;
  }

  Partners.findOne({ title: title }).then((result) => {
    result.title = changedTitle;
    result.route = changedRoute;
    if (type === "url") {
      result.image = changedURL;
    } else {
      result.image = changedUpload;
    }
    result.save();
    res.json({ success: true });
  });
});

module.exports = router;
