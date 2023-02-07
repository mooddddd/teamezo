const express = require('express')
const router = express.Router()
const user = require('./user.router')
const board = require('./board.router')
const notice = require('./notice.router')
const qna = require('./qna.router')
const main = require('./router')

router.use('/', main)
router.use('/user', user)
router.use('/board', board)
router.use('/notice', notice)
router.use('/qna', qna)

module.exports = router
