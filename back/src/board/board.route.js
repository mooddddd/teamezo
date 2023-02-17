const express = require("express");
const router = express.Router();
const { boardController } = require("./board.module");
const upload = require("../../middlewares/upload");

router.get("/list", (req, res, next) => boardController.getList(req, res, next));
router.post("/list", (req, res, next) => boardController.postListLiked(req, res, next));

router.get("/view", (req, res, next) => boardController.getview(req, res, next));

router.get("/write", (req, res, next) => boardController.getWirte(req, res, next));
router.post("/write", upload.array("fileUrl"), (req, res, next) => boardController.postWrite(req, res, next));

router.get("/modify", (req, res, next) => boardController.getModify(req, res, next));
router.post("/modify", upload.array("fileUrl"), (req, res, next) => boardController.postmodify(req, res, next));

router.get("/delete", (req, res, next) => boardController.getDelete(req, res, next));

router.post("/view/comment", (req, res, next) => boardController.getComment(req, res, next));

module.exports = router;
