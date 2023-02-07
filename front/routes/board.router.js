const express = require("express");
const router = express.Router();
const controller = require("../controllers/board.controller");

router.get("/list", controller.getList);

router.get("/write", controller.getWrite);
// router.post("/write", controller.postWrite);

router.get("/view", controller.getView);

// router.post("/view/comment");

// router.get("/modity");
// router.post("/modify");

// router.get("/delete");

module.exports = router;
