const axios = require('axios')
const request = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
})

exports.getlogin = (req, res) => {
    res.render('user/login.html')
}

exports.postlogin = async (req, res, next) => {
    try {
        const response = await request.post('/auth', {
            ...req.body,
        })
        if (response.data.username !== undefined) {
            res.setHeader('Set-Cookie', `token=${response.data.userid};path=/;`)
            res.redirect('/')
        } else {
            res.render('error.html')
        }
    } catch (error) {
        next(error)
    }
}

exports.getjoin = (req, res, next) => {
    try {
        res.render('user/join.html')
    } catch (error) {
        next(error)
    }
}

exports.postjoin = async (req, res, next) => {
    try {
        const result = await request.post('/users/join', {
            ...req.body,
        })
        const cookies = result.data
        res.setHeader('Set-Cookie', `token=${cookies.userid}; path=/;`)
        res.redirect(`/user/welcome?userid=${cookies.userid}&username=${cookies.username}`)
    } catch (e) {
        next(e)
    }
}

exports.getwelcome = (req, res, next) => {
    try {
        const userid = req.query.userid
        const username = req.query.username
        res.render('user/welcome.html', { userid, username })
    } catch (error) {
        next(error)
    }
}

exports.getprofile = async (req, res, next) => {
    try {
        const { token } = req.cookies
        const profileCookies = req.cookies.token
        const { page } = req.query
        if (profileCookies === undefined) throw "토큰이 없습니다."
            const result = await request.get('/users/profile', {
                url: 'http://localhost:3000/',
                params: { userid: profileCookies, page },
            })
            res.render('user/profile', { result, token })
    } catch (error) {
        next(error)
    }
}

exports.postProfileEdit = (req, res, next) => {
    try {
        const profileCookies = JSON.stringify(req.cookies.token)
        if (profileCookies === undefined) throw "토큰이 없습니다."
            res.redirect('/user/profile')
    } catch (error) {
        next(error)
    }
}

exports.getProfileEdit = (req, res, next) => {
    try {
        const profileCookies = JSON.stringify(req.cookies.token)
        const { token } = req.cookies
        if (profileCookies === undefined) throw "로그인이 필요합니다."
            const userid = 'hongtae'
            const username = 'hongttt'
            const useremail = 'hongtae3@gmail.com'
            res.render('user/profileEdit.html', { userid, username, useremail, token })
    } catch (error) {
        next(error)
    }
}
