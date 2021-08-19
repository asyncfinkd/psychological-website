const router = require("express").Router();
const Partners = require("../../../schema/partners/PartnersSchema");
const path = require("path");
const loginMiddleware = require("../../../middlewares/loginMiddleware");

router
  .route("/partners/change")
  .all(loginMiddleware)
  .post(async (req, res) => {
    const title = req.body.title;
    const changedTitle = req.body.changedTitle;
    const changedRoute = req.body.changedRoute;
    const type = req.body.type;
    if (type === "url") {
      var changedURL = req.body.url;
    } else {
      var changedUpload = req.body.changedUpload;
      var imageURL = req.body.imageURL;
    }
    Partners.findOne({ title: title }).then((result) => {
      result.title = changedTitle;
      result.route = changedRoute;
      if (type === "url") {
        result.image = changedURL;
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
            function (err) {
              // console.log(err);
            }
          );
          result.image = `${imageURL}`;
        }
      }
      result.save();
      res.json({ success: true });
    });
  });

module.exports = router;
