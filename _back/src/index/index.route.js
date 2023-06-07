const express = require('express')
const router = express.Router()
const { controller } = require('./index.module')

router.get('/', (req, res, next) => controller.getIndex(req, res, next))


module.exports = router