const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    if (req.cookies.token) {
        const userid = 'asdf'
        res.render('main.html', { userid })
    } else {
        res.render('main.html')
    }
})

module.exports = router
