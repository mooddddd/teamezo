const express = require('express')
const router = express.Router()
const { qnaController: controller } = require('./qna.module')

router.get('/list', (req, res, next) => controller.getBoardList(req, res, next))

module.exports = router
