const express = require('express')
const router = express.Router()
const user = require('./user.router')
const board = require('./board.router')
const notice = require('./notice.router')
const qna = require('./qna.router')
const index = require('./index.router')
const admin = require('./admin.router')
const search = require('./search.router')

router.use('/', index)
router.use('/user', user)
router.use('/board', board)
router.use('/notice', notice)
router.use('/qna', qna)
router.use('/admin', admin)
router.use('/search', search)

module.exports = router
