const jwt = require("jsonwebtoken");
const env = require("./../env.json");
// const os = require("os");
// const si = require("systeminformation");

module.exports = async function (req, res, next) {
  const token = JSON.parse(JSON.stringify(req.headers.authorization.split(" ")[1]));
  try {
    if (!token) {
      res.json({ msg: "ტოკენი არ არსებობს" });
      next();
    } else {
      const decodedData = jwt.verify(token, env.ACCESS_TOKEN);
      req.email = decodedData.email;
      console.log(decodedData);
      req.role = decodedData.role;
      next();
    }
  } catch (err) {
    res.json({ msg: "თქვენი სესია ამოიწურა", expired: true });
  }
};