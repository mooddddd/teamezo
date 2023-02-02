const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("board/category/boardWrite.html");
});

module.exports = router;
