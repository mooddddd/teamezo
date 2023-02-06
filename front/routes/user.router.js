const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");

router.get("/login", controller.getlogin);
// router.post("/login");

router.get("/join", controller.getjoin);
// router.post("/join");

router.get("/welcome");

router.get("/profile");

router.get("/modify");
// router.post("/modify:userid");

module.exports = router;
