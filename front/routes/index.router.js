const express = require('express')
const router = express.Router()
const controller = require("../controllers/index.controller");

// 랭킹 요청 코드(백서버에서 작업) : [ {}, {}, {}, ...]
// 글 리스트 가져오기 : [{}, {}, {}, {}, ...]
router.get('/', controller.getIndex)

module.exports = router
