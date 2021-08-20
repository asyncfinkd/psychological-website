const router = require("express").Router();
const Admin = require("../../../schema/admin/AdminSchema");
const Logs = require("../../../schema/logs/LogsSchema");
const jwt = require("jsonwebtoken");
const env =  require("../../../env.json");

router.route("/signin").post(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const ip = req.body.ip;

  Admin.findOne({ email: email }).then((res2) => {
    if (res2 === null) {
      res.json({ message: "მომხმარებელი არ არსებობს", success: false });
    } else if (res2.password === password) {
      const email = res2.email;
      const role = res2.role;
      const access_token = jwt.sign( { email, role },env.ACCESS_TOKEN, { expiresIn: "1h" }
      );
      const Log = new Logs({
        IP: ip,
        login: "admin",
      });
      Log.save();
      res.json({
        user: {
          username: res2.username,
          email: res2.email,
          role: res2.role,
          access_token: access_token
        },
        success: true,
      });
    } else {
      res.json({ message: "პაროლი არასწორია", success: false });
    }
  });
});

module.exports = router;
