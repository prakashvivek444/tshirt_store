const express = require("express");
const router = express.Router();

const {getUserById,getUser} = require("../controllers/user");
const {isSignedIn,isAdmin,isAuthenticated} = require("../controllers/auth");


router.param("userId",getUserId);

router.get("/user/:userId",getUser);



module.exports = router;