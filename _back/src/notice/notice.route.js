const express = require('express')
const router = express.Router()
const { noticeController: controller } = require('./notice.module')
const { boardController: controller2 } = require('../board/board.module')
const upload = require('../../middlewares/upload')

router.get('/list', (req, res, next) => controller.getBoardList(req, res, next))
router.post('/write', upload.array('fileUrl'), (req, res, next) =>
    controller2.postWrite(req, res, next)
)
module.exports = router
