const axios = require('axios')
const e = require('express')

exports.getlogin = (req, res) => {
    res.render('user/login.html')
}

exports.postlogin = async (req, res) => {
    const { userid, userpw } = req.body
    // const result = await axios.post('http://localhost:3005/user/login', {
    //     userid,
    //     userpw,
    // })

    const result = {
        token: 'asd',
        user: {
            userid: req.body.userid,
            username: req.body.userpw,
        },
    }

    const cookies = JSON.stringify(result.token)
    res.setHeader('Set-Cookie', `token=${cookies}; path=/;`)
    res.redirect('/')
}

exports.getjoin = (req, res) => {
    res.render('user/join.html')
}

exports.postjoin = (req, res) => {
    const { userid, userpw, userpwchk, username, useremail } = req.body
    const userinfo = {
        token: 'hohoho',
        userid,
        userpw,
        userpwchk,
        username,
        useremail,
    }
    const cookies = JSON.stringify(userinfo.token)
    res.setHeader('Set-Cookie', `token=${cookies}; path=/;`)
    res.redirect('/user/welcome')
}

exports.getwelcome = (req, res) => {
    if (req.cookies.token) {
        const userid = 'hahaha'
        const userpw = 'zzz'
        const userpwchk = 'zzz'
        const username = 'hongtae'
        const useremail = 'gkgk@gmail.com'
        res.render('user/welcome.html', { userid, username })
    } else {
        res.render('user/welcome.html')
    }
}

exports.getprofile = (req, res) => {
    const profileCookies = JSON.stringify(req.cookies.token)
    if (profileCookies === undefined) {
        res.render('error.html')
    } else {
        const userid = 'hahaha'
        const username = 'hongtae'
        const useremail = 'hongtae@gmail.com'
        res.render('user/profile.html', { userid, username, useremail })
    }
}

exports.postProfileEdit = (req, res) => {
    const profileCookies = JSON.stringify(req.cookies.token)
    console.log('profileEdit!!!!')
    if (profileCookies === undefined) {
        res.render('error.html')
    } else {
        const userid = 'amamam'
        const username = 'hongtae2'
        const useremail = 'hongtae2@gmail.com'
        res.redirect('/profileEdit')
    }
}

exports.getProfileEdit = (req, res) => {
    const profileCookies = JSON.stringify(req.cookies.token)
    if (profileCookies === undefined) {
        res.render('error.html')
    } else {
        const userid = 'hongtae'
        const username = 'hongttt'
        const useremail = 'hongtae3@gmail.com'
        res.render('user/profileEdit.html', { userid, username, useremail })
    }
}
