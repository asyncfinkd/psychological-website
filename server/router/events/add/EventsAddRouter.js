const router = require("express").Router();
const EventsSchema = require("../../../schema/events/EventsSchema");
const path = require("path");
const loginMiddleware = require("../../../middlewares/loginMiddleware");

router
  .route("/create")
  .all(loginMiddleware)
  .post(async (req, res) => {
    const image = req.body.image;
    const images = req.body.images;
    const title = req.body.title;
    const date = req.body.date;
    const description = req.body.description;
    const titleEN = req.body.titleEN;
    const descriptionEN = req.body.descriptionEN;
    const dir = path.join(__dirname, "../../../public/");

    EventsSchema.find().then((result) => {
      if (image) {
        let base64Data = image.replace(/^data:image\/\w+;base64,/, "");

        require("fs").writeFile(
          `${dir}${result.length + 1}_img.jpg`,
          base64Data,
          "base64",
          function (err) {}
        );
      }

      let imagesArr = [];
      if (images) {
        images.map((item, i) => {
          let base64Data = item.replace(/^data:image\/\w+;base64,/, "");

          imagesArr.push({
            url: `${result.length + 1}_${i}_img.jpg`,
          });
          require("fs").writeFile(
            `${dir}${result.length + 1}_${i}_img.jpg`,
            base64Data,
            "base64",
            function (err) {}
          );
        });
      }
      let dataImage = "";

      if (image) {
        dataImage = `${result.length + 1}_img.jpg`;
      } else {
        dataImage = "";
      }

      const Events = new EventsSchema({
        en: [
          {
            title: titleEN,
            description: descriptionEN,
            route: result.length + 1,
            date: date,
            image: dataImage,
            images: imagesArr,
          },
        ],
        ge: [
          {
            title: title,
            description: description,
            route: result.length + 1,
            date: date,
            image: dataImage,
            images: imagesArr,
          },
        ],
      });
      Events.save();
      res.json({ success: true });
    });
  });

module.exports = router;
