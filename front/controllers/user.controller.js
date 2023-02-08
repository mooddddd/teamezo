const axios = require('axios')

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
        const result = [
            {
                idx: 0,
                userid: 'hongtae',
                username: 'hongtae',
                useremail: 'asd@naver.com',
                subject: '게시글 제목임',
                comment: 'hongtae111',
                hit: '3',
            },
            {
                idx: 1,
                userid: 'hongtae2',
                username: 'hongtae2',
                useremail: 'asd2@naver.com',
                subject: '게시글 제목임2',
                comment: 'hongtae222',
                hit: '23',
            },
            {
                idx: 2,
                userid: 'hongtae3',
                username: 'hongtae3',
                useremail: 'asd3@naver.com',
                subject: '게시글 제목임3',
                comment: 'hongtae333',
                hit: '4',
            },
            {
                idx: 3,
                userid: 'hongtae4',
                username: 'hongtae4',
                useremail: 'asd4@naver.com',
                subject: '게시글 제목임4',
                comment: 'hongtae444',
                hit: '55',
            },
            {
                idx: 4,
                userid: 'hongtae5',
                username: 'hongtae5',
                useremail: 'asd5@naver.com',
                subject: '게시글 제목임5',
                comment: 'hongtae555',
                hit: '21',
            },
            {
                idx: 5,
                userid: 'hongtae6',
                username: 'hongtae6',
                useremail: 'asd6@naver.com',
                subject: '게시글 제목임6',
                comment: 'hongtae666',
                hit: '66',
            },
        ]

        const resultLength = result.length
        const totalPage = Math.ceil(resultLength / 5)
        res.render('user/profile.html', { result, resultLength, totalPage })
    }
}

exports.postProfileEdit = (req, res) => {
    const profileCookies = JSON.stringify(req.cookies.token)
    if (profileCookies === undefined) {
        res.render('error.html')
    } else {
        const userid = 'amamam'
        const username = 'hongtae2'
        const useremail = 'hongtae2@gmail.com'
        res.redirect('/user/profile')
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
