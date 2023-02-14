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
    try {
        const result = await request.post('/users/join', {
            ...req.body,
        })

        console.log('result')
        console.log(result)
        const cookies = result.data
        res.setHeader('Set-Cookie', `token=${cookies.userid}; path=/;`)
        res.redirect(`/user/welcome?userid=${cookies.userid}&username=${cookies.username}`)
    } catch (e) {
        res.render('error.html')
    }
}

exports.getwelcome = (req, res) => {
    const userid = req.query.userid
    const username = req.query.username
    res.render('user/welcome.html', { userid, username })
}

exports.getprofile = async (req, res) => {
    // 1. 로그인여부체크
    // 2. backend 에 다가 필요한 내용을 전달하기
    const profileCookies = req.cookies.token
    const { page } = req.query
    if (profileCookies === undefined) {
        res.render('error.html')
    } else {
        const result = await request.get('/users/profile', {
            url: 'http://localhost:3000/',
            params: { userid: profileCookies, page },
        })
        console.log('{result}')
        console.log(result.data)
        res.render('user/profile', { result })
    }
}

exports.postProfileEdit = (req, res) => {
    const profileCookies = JSON.stringify(req.cookies.token)
    if (profileCookies === undefined) {
        res.render('error.html')
    } else {
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
