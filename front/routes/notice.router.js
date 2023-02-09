const express = require("express");
const router = express.Router();
const controller = require("../controllers/notice.controller");

router.get("/list", controller.getList);
router.get("/view");

module.exports = router;
