const router = require("express").Router();
const Events = require("../../../schema/events/EventsSchema");
const loginMiddleware = require("../../../middlewares/loginMiddleware");
const path = require("path");

router
  .route("/events/edit")
  .all(loginMiddleware)
  .post(async (req, res) => {
    const changedTitle = req.body.changedTitle;
    const changedTitleEN = req.body.changedTitleEN;
    const changedDescription = req.body.changedDescription;
    const changedDescriptionEN = req.body.changedDescriptionEN;
    const image = req.body.image;
    const dir = path.join(__dirname, "../../../public/");

    Events.findOne({ _id: req.body._id }).then((result) => {
      const datasecond = image.split("/")[1].split(";");
      let base64Data = image.replace(/^data:image\/\w+;base64,/, "");
      console.log(result);

      require("fs").writeFile(
        `${dir}${result.ge[0].image}`,
        base64Data,
        "base64",
        function (err) {}
      );

      let dataImage = "";
      if (image) {
        dataImage = `${result.ge[0].image}`;
      } else {
        dataImage = "";
      }

      if (dataImage.length != 0) {
        result.ge[0].image = dataImage;
        result.en[0].image = dataImage;
      }
      result.ge[0].title = changedTitle;
      result.en[0].title = changedTitleEN;
      result.ge[0].description = changedDescription;
      result.en[0].description = changedDescriptionEN;
      result.save();
      res.json({ success: true });
    });
  });

module.exports = router;
