const router = require("express").Router();
const SignupModel = require("../../schema/Register/RegisterSchema");

let user = {};
router.route("/readSignin").post(async (req, res) => {
    SignupModel.findOne({ email: req.body.email }).then((result) => {
        if(result == null) {
            res.json({message: "მომხმარებელი არ არსებობს", success: false});
        } else if(result.password == req.body.password) {
            user = result;
            res.json({user: result, success: true});
        } else {
            res.json({message: "პაროლი არასწორია", success: false})
        }
    })
})

module.exports = router;