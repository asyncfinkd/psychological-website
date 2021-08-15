const router = require("express").Router();
const EventsSchema = require("../../../schema/events/EventsSchema");
const path = require("path");

router.route("/create").post(async (req, res) => {
  const image = req.body.image;
  const title = req.body.title;
  const description = req.body.description;
  const dir = path.join(__dirname, "../../../public/");

  EventsSchema.find().then((result) => {
    let base64Data = image.replace(/^data:image\/\w+;base64,/, "");

    require("fs").writeFile(
      `${dir}${result.length + 1}_img.jpg`,
      base64Data,
      "base64",
      function (err) {
        // console.log(err);
      }
    );

    const Events = new EventsSchema({
      title: title,
      description: description,
      route: result.length + 1,
      date: "13-08-2021",
      image: `${result.length + 1}_img.jpg`,
    });
    Events.save();
    res.json({ success: true });
  });
});

module.exports = router;
