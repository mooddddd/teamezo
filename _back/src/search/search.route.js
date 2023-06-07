const express = require('express')
const router = express.Router()
const { controller } = require('./search.module')

router.post('/', (req, res, next) => controller.postSearch(req, res, next))


module.exports = router