const router = require("express").Router();
const Partners = require("../../../schema/partners/PartnersSchema");
const path = require("path");
const loginMiddleware = require("../../../middlewares/loginMiddleware");

router
  .route("/partners/change")
  .all(loginMiddleware)
  .post(async (req, res) => {
    const changedTitle = req.body.changedTitle;
    const changedRoute = req.body.changedRoute;
    const type = req.body.type;
    const titleEN = req.body.titleEN;

    if (type === "url") {
      var changedURL = req.body.url;
    } else {
      var changedUpload = req.body.changedUpload;
      var imageURL = req.body.imageURL;
    }
    Partners.findOne({ _id: req.body._id }).then((result) => {
      result.ge[0].title = changedTitle;
      result.en[0].title = titleEN;
      result.ge[0].route = changedRoute;
      result.en[0].route = changedRoute;
      if (type === "url") {
        result.ge[0].image = changedURL;
        result.en[0].image = changedURL;
      } else {
        if (changedUpload !== null) {
          const dir = path.join(__dirname, "../../../public/");
          let base64Data = changedUpload.replace(
            /^data:image\/\w+;base64,/,
            ""
          );

          require("fs").writeFile(
            `${dir}${imageURL}`,
            base64Data,
            "base64",
            function (err) {}
          );
          result.ge[0].image = `${imageURL}`;
          result.en[0].image = `${imageURL}`;
        }
      }
      result.save();
      res.json({ success: true });
    });
  });

module.exports = router;
