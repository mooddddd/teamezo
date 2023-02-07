const express = require('express')
const router = express.Router()
const controller = require('../controllers/user.controller')

router.get('/login', controller.getlogin)
router.post('/login', controller.postlogin)

router.get('/join', controller.getjoin)
router.post('/join', controller.postjoin)

router.get('/welcome', controller.getwelcome)

router.get('/profile', controller.getprofile)

router.get('/modify')
// router.post("/modify:userid");

module.exports = router
