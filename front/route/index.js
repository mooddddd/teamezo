const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
  res.render("user/join.html");
});


module.exports = router
