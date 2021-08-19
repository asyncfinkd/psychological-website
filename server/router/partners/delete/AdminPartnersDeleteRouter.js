const router = require("express").Router();
const Partners = require("../../../schema/partners/PartnersSchema");
const loginMiddleware = require("../../../middlewares/loginMiddleware");

router
  .route("/delete/partners/:id")
  .all(loginMiddleware)
  .post(async (req, res) => {
    Partners.findOneAndRemove({ title: req.body.title }, function (err) {
      if (!err) {
      } else {
      }
    }).then((result) => {
      res.json({ success: true });
    });
  });

module.exports = router;
