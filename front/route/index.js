const { response } = require("express");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout/listForm.html");
});

module.exports = router;
