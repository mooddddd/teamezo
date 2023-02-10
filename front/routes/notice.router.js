const express = require("express");
const router = express.Router();
const controller = require("../controllers/notice.controller");

router.get("/list", controller.getList);
router.get("/view", controller.getView);

router.get("/write", controller.getWrite);
router.post("/write", controller.postWrite);

module.exports = router;
