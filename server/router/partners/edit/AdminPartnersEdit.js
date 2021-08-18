const router = require("express").Router();
const Partners = require("../../../schema/partners/PartnersSchema");
const path = require("path");

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
    Partners.find().then((res2) => {
      res2.map((item) => {
        if (item.type != "url") {
          let itemInArray = [item];
          result.title = changedTitle;
          result.route = changedRoute;
          if (type === "url") {
            result.image = changedURL;
          } else {
            const dir = path.join(__dirname, "../../../public/");
            let base64Data = changedUpload.replace(
              /^data:image\/\w+;base64,/,
              ""
            );
            require("fs").writeFile(
              `${dir}${itemInArray.length}_partner.jpg`,
              base64Data,
              "base64",
              function (err) {
                // console.log(err);
              }
            );
            result.image = `${itemInArray.length}_partner.jpg`;
          }
          result.save();
          res.json({ success: true });
        }
      });
    });
  });
});

module.exports = router;
