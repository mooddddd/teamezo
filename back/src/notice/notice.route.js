const express = require('express')
const router = express.Router()
const { noticeController: controller } = require('./notice.module')

router.get('/list', (req, res, next) => controller.getBoardList(req, res, next))

module.exports = router
