const axios = require('axios')
const request = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    withCredentials: true,
})

exports.getlogin = (req, res) => {
    res.render('user/login.html')
}

exports.postlogin = async (req, res) => {
    const response = await request.post('/auth', {
        ...req.body,
    })
    console.log(response.data.username)
    if (response.data.username !== undefined) {
        res.setHeader('Set-Cookie', `token=${response.data.userid};path=/;`)
        res.redirect('/')
    } else {
        res.render('error.html')
    }
}

exports.getjoin = (req, res) => {
    res.render('user/join.html')
}

exports.postjoin = async (req, res) => {
    const result = await request.post('/users/join', {
        ...req.body,
    })
    console.log('result')
    console.log(result.data)
    const cookies = result.data
    res.setHeader('Set-Cookie', `token=${cookies.userid}; path=/;`)
    res.redirect(`/user/welcome?userid=${cookies.userid}&username=${cookies.username}`)
}

exports.getwelcome = (req, res) => {
    const userid = req.query.userid
    const username = req.query.username
    res.render('user/welcome.html', { userid, username })
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
