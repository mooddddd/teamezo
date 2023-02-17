const express = require("express");
const router = express.Router();
const index = require("../src/index/index.route")
const users = require("../src/user/user.route");
const auth = require("../src/auth/auth.route");
const board = require("../src/board/board.route");
const admin = require('../src/admin/admin.route')
const search = require('../src/search/search.route')

router.use("/", index)
router.use("/users", users);
router.use("/auth", auth);
router.use("/board", board);
router.use('/admin',admin)
router.use('/search', search)


module.exports = router;