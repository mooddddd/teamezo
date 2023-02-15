const express = require("express");
const router = express.Router();
const { boardController } = require("./board.module");

router.get("/list", (req, res, next) => boardController.getList(req, res, next));
router.post("/list", (req, res, next) => boardController.postListLiked(req, res, next));

router.get("/view", (req, res, next) => boardController.getview(req, res, next));

module.exports = router;
