const express = require('express')
const router = express.Router()
const controller = require('../controllers/qna.controller')

router.get('/list', controller.getList)
router.get('/write', controller.getWrite)
router.get('/view', controller.getView)
module.exports = router
