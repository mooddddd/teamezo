const express = require('express')
const router = express.Router()
const { controller } = require('./admin.module')
console.log(controller)

router.get('/user', (req, res, next) => controller.getUser(req, res, next))
router.post('/user', (req, res, next) => controller.postUser(req, res, next))

router.get('/userEdit', (req, res, next) => controller.getUserEdit(req, res, next))
router.post('/userEdit', (req, res, next) => controller.postUserEdit(req, res, next))

router.get('/board', (req, res, next) => controller.getBoard(req, res, next))
router.post('/board', (req, res, next) => controller.postBoard(req, res, next))
module.exports = router