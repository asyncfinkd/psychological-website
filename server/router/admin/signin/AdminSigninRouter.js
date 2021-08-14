const express = require("express").Router();
const Admin = require("../../../schema/admin/AdminSchema");

router.route("/signin").post(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  let user = {};
  Admin.findOne({ email: email }).then((res2) => {
    if (res2 === null) {
      res.json({ message: "მომხმარებელი არ არსებობს", success: false });
    } else if (res2.password === password) {
      user = result;
      res.json({ user: result, success: true });
    } else {
      res.json({ message: "პაროლი არასწორია", success: false });
    }
  });
});

module.exports = router;
