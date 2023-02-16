const express = require("express");
const router = express.Router();
const controller = require("../controllers/board.controller");

router.get("/list", controller.getList);

router.get("/write", controller.getWrite);
// router.post("/write", controller.postWrite);

router.get("/view", controller.getView);

// router.get("/view/comments")
router.post("/view/comments", controller.postComment);
// router.get("/view/comments/modify")
// router.get("/view/comments/delete")

// router.get("/modify");
// router.post("/modify");

// router.get("/delete");

module.exports = router;
