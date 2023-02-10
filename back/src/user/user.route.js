const express = require('express')
const router = express.Router()
const { userController: controller } = require('./user.module')

router.post('/login', (req, res, next) => controller.postLogin(req, res, next))

module.exports = router
