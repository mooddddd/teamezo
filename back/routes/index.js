const express = require('express')
const router = express.Router()
const users = require('../src/user/user.route')
const auth = require('../src/auth/auth.route')
const board = require('../src/board/board.route')
const admin = require('../src/admin/admin.route')
const notice = require('../src/notice/notice.route')
const qna = require('../src/qna/qna.route')

router.use('/users', users)
router.use('/auth', auth)
router.use('/board', board)
router.use('/admin', admin)
router.use('/notice', notice)
router.use('/qna', qna)

module.exports = router
