const router = require("express").Router();
const loginMiddleware = require("../../../middlewares/loginMiddleware");

router.route("/checkifadmin").all(loginMiddleware).post(async (req, res) => {
    if(req.role === "admin") {
        res.json({success: true});
    } else {
        res.json({success: false});
    }
})

module.exports = router;