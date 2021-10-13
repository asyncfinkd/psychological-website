const router = require("express").Router();
const ResourcesSchema = require("../../schema/resources/ResourcesSchema");

router.route("/get/resources").get(async (req, res) => {
  ResourcesSchema.find().then((result) => {
    res.json(result);
  });
});

module.exports = router;
