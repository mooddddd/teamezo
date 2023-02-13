const express = require("express");
const router = express.Router();
const controller = require("../controllers/admin.controller");

router.get("/", controller.getAdmin)

router.get("/user", controller.getAdminUser)
router.post("/user", controller.postAdminUser)

router.get("/userEdit", controller.getAdminUserEdit)
router.post("/userEdit", controller.postAdminUserEdit)

router.get("/category", controller.getAdminCategory)
router.post("/category", controller.postAdminCategory)

router.get("/board", controller.getAdminBoard)
router.post("/board", controller.postAdminBoard)

router.get("/stats", controller.getAdminStats)


module.exports = router;