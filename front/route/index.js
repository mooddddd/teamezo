const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("board/category/boardList.html");
});

module.exports = router;
