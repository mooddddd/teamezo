const express = require('express')
const router = express.Router()
const users = require('../src/user/user.route')
const auth = require('../src/auth/auth.route')
// const board = require('../src/board/board.route')
const admin = require('../src/admin/admin.route')

router.use('/users', users)
router.use('/auth', auth)
// router.use('/board',board)
router.use('/admin',admin)

module.exports = router
