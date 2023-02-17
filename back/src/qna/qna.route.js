const express = require('express')
const router = express.Router()
const { qnaController: controller } = require('./qna.module')
const upload = require('../../middlewares/upload')

router.get('/list', (req, res, next) => controller.getBoardList(req, res, next))

router.post('/write', upload.array('fileUrl'), (req, res, next) =>
    controller.postQnaWrite(req, res, next)
)

router.get('/view', (req, res, next) => controller.getview(req, res, next))
module.exports = router
