const express = require('express')
const router = express.Router()
const user = require('./user.router')
const board = require('./board.router')
const notice = require('./notice.router')
const qna = require('./qna.router')
const main = require('./router')

router.get('/', (req, res) => {
    if (req.cookies) {
        const userid = 'asdf'
        res.render('main.html', { userid })
    }
})

router.get('/welcome', (req, res) => {
    console.log(req.cookies)
    if (req.cookies) {
        const userid = 'hahaha'
        const userpw = 'zzz'
        const userpwchk = 'zzz'
        const username = 'hongtae'
        const useremail = 'gkgk@gmail.com'
        res.render('user/welcome.html', { userid, username })
    }
})

router.get('/profile', (req, res) => {
    const profileCookies = JSON.stringify(req.cookies)
    console.log(profileCookies === {})
    if (profileCookies !== {}) {
        const userid = 'hahaha'
        const username = 'hongtae'
        const useremail = 'hongtae@gmail.com'
        res.render('user/profile.html', { userid, username, useremail })
    } else if (profileCookies === {}) {
        res.render('error.html')
    }
})

router.use('/', main)
router.use('/user', user)
router.use('/board', board)
router.use('/notice', notice)
router.use('/qna', qna)

module.exports = router
