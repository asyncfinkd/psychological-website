const router = require("express").Router();
const ResourcesSchema = require("../../schema/resources/ResourcesSchema");
const path = require("path");
const loginMiddleware = require("../../middlewares/loginMiddleware");

router.route("/get/resources").get(async (req, res) => {
  ResourcesSchema.find().then((result) => {
    res.json(result);
  });
});

router.route("/add/resources").post(async (req, res) => {
  const image = req.body.image;
  const dir = path.join(__dirname, "../../public/");
  ResourcesSchema.find().then((result) => {
    const datasecond = image.split("/")[1].split(";");
    let base64Data = image.replace(/^data:image\/\w+;base64,/, "");

    require("fs").writeFile(
      `${dir}${result.length + 1}_resource.${
        datasecond[0] === "png" ? "jpg" : datasecond[0]
      }`,
      base64Data,
      "base64",
      function (err) {}
    );

    let dataImage = "";
    if (image) {
      dataImage = `${result.length + 1}_resource.${
        datasecond[0] === "png" ? "jpg" : datasecond[0]
      }`;
    } else {
      dataImage = "";
    }

    const Res = new ResourcesSchema({
      url: dataImage,
    });
    Res.save();
    res.json({
      url: `https://psychological-backend.herokuapp.com/public/${dataImage}`,
    });
  });
});

router
  .route("/delete/resources")
  .all(loginMiddleware)
  .post(async (req, res) => {
    console.log(req.body.url);
    ResourcesSchema.findOneAndRemove({ url: req.body.url }, function (err) {
      if (!err) {
      } else {
      }
    }).then((result) => {
      res.json({ success: true });
    });
  });

module.exports = router;
