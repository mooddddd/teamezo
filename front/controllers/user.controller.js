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
    res.redirect('/welcome')
}

exports.getwelcome = (req, res) => {
    res.render('user/welcome.html')
}

exports.getprofile = (req, res) => {
    res.render('user/profile.html')
}
