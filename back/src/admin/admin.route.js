const express = require('express')
const router = express.Router()
const { controller } = require('./admin.module')
console.log(controller)

router.get('/user', (req, res, next) => controller.getUser(req, res, next))
router.post('/user', (req, res, next) => controller.postUser(req, res, next))

router.get('/userEdit', (req, res, next) => controller.getUserEdit(req, res, next))
router.post('/userEdit', (req, res, next) => controller.postUserEdit(req, res, next))


module.exports = router