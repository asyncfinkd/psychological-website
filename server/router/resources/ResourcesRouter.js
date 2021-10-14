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
  const file = req.files.file;
  const type = file.name.split(".").pop();

  ResourcesSchema.find().then((result) => {
    // const datasecond = image.split("/")[1].split(";");
    file.mv(`${dir}${result.length + 1}_resource.${type}`, (err) => {
      if (err) return res.json(err);
      console.log(`${file.name}`);
    });

    let dataImage = "";
    if (file) {
      dataImage = `${result.length + 1}_resource.${type}`;
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
