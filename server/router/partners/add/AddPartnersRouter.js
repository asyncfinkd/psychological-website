const router = require("express").Router();
const Partners = require("../../../schema/partners/PartnersSchema");
const path = require("path");
const loginMiddleWare = require("../../../middlewares/loginMiddleware");

router
  .route("/partners/add")
  .all(loginMiddleWare)
  .post(async (req, res) => {
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
          type: type,
          router: result.length + 1,
        });
        Partner.save();
      } else if (type === "upload") {
        let data = result;
        let sortedData = [];
        data.map((item) => {
          if (item.type != "url") {
            sortedData.push(1);
          }
        });
        let base64Data = image.replace(/^data:image\/\w+;base64,/, "");
        require("fs").writeFile(
          `${dir}${sortedData.length + 1}_partner.jpg`,
          base64Data,
          "base64",
          function (err) {
            // console.log(err);
          }
        );
        const Partner = new Partners({
          image: `${sortedData.length + 1}_partner.jpg`,
          title: title,
          route: route,
          type: type,
          router: result.length + 1,
        });
        Partner.save();
      }

      res.json({ success: true });
    });
  });

module.exports = router;
