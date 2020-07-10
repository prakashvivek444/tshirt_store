var express = require("express");
var router = express.Router();
const { check , validationResult } = require("express-validator");

const {signout , signup , signin} = require("../controllers/auth");
router.get("/signout", signout);
router.post("/signup",[
    check("name").isLength({min:4}).withMessage("Name must be at least 5 chars long"),
    check("email").isEmail().withMessage("Email is required"),
    check("password").isLength({min:4}).withMessage("Password should be at least 5 chars")
], signup);

router.post("/signin",[
    check("email").isEmail().withMessage("Email is required"),
    check("password").isLength({min:1}).withMessage("Password field is required")
], signin);
module.exports = router;