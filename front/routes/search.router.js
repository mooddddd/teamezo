const express = require("express");
const router = express.Router();
const controller = require("../controllers/search.controller");

router.get("/", controller.getSearch)
router.post("/", controller.postSearch)

module.exports = router;