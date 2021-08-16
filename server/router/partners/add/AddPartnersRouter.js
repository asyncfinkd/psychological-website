const router = require("express").Router();
const Partners = require("../../../schema/partners/PartnersSchema");
const path = require("path");

router.route("/partners/add").post(async (req, res) => {
  const image = req.body.image;
  const type = req.body.type;
  const title = req.body.title;
  const route = req.body.route;
  const dir = path.join(__dirname, "../../../public/");

  Partners.find().then((result) => {
    if (type === "url") {
      const Partner = new Partners({
        image: image,
        title: title,
        route: route,
      });
      Partner.save();
    } else if (type === "upload") {
      let base64Data = image.replace(/^data:image\/\w+;base64,/, "");
      require("fs").writeFile(
        `${dir}${result.length + 1}_img.jpg`,
        base64Data,
        "base64",
        function (err) {
          // console.log(err);
        }
      );
      const Partner = new Partners({
        image: `${result.length + 1}_partner.jpg`,
        title: title,
        route: route,
      });
      Partner.save();
    }

    res.json({ success: true });
  });
});

module.exports = router;
