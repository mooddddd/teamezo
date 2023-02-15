const express = require('express')
const qs = require('qs')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const axios = require('axios')
const app = express()
const router = require('./routes')
const { userKakao } = require('./src/user/user.module')
const crypto = require('crypto')
require('dotenv').config()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.use(
    cors({
        origin: true,
        credentials: true,
    })
)
app.use(router)

const HOST = `https://kauth.kakao.com`
const REST_API_KEY = process.env.REST_API_KEY
const REDIRECT_URI = process.env.REDIRECT_URI
const CLIENT_SECRET = process.env.CLIENT_SECRET

// step2. 토큰받기

app.get('/oauth/kakao', async (req, res, next) => {
    const { code } = req.query
    console.log('code')
    console.log(code)

    const host = `${HOST}/oauth/token`
    const headers = {
        'Content-type': 'application/x-www-form-urlencoded',
    }

    const body = qs.stringify({
        grant_type: 'authorization_code',
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code,
        client_secret: CLIENT_SECRET,
    })

    const response = await axios.post(host, body, headers)
    console.log('response.data')
    console.log(response.data)

    // step3. 회원정보 가져옴니당
    try {
        const { access_token } = response.data
        const host = `https://kapi.kakao.com/v2/user/me`
        const user = await axios.get(host, {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${access_token}`,
            },
        }) // 모든정보가져옴 이제 user.kakao.js 로 정보 던져서 우리쪽에 저장 / 저장하기전에 Authorization 검증
        console.log('useruseruseruseruser')
        console.log(user.data)
        console.log(user.data.id)
        console.log(user.data.properties.profile_image)
        console.log(user.data.kakao_account.email)
        // const kakaoLoginUser = userKakao.addKakaoInfo(user.data) // id hash화 한것? front set-cookies로 저장
        return kakaoLoginUser
    } catch (e) {}

    // console.log('kakaoUser userkakao')
    // console.log(kakaoUser)
    // const kakaoUserPw = this.crypto
    //     .createHmac('sha256', 'teamezo')
    //     .update(kakaoUser.id)
    //     .digest('hex')
    // console.log('kakaoUserPw')
    // console.log(kakaoUserPw)
    // const user = {
    //     userid: kakaoUser.id,
    //     userpw: kakaoUserPw,
    //     nickname: kakaoUser.profile.nickname,
    //     email: kakaoUser.email,
    //     avatarUrl: kakaoUser.properties.profile_image,
    //     provider: 'kakao',
    // }
    // console.log('kakaoUser')
    // console.log(user)

    res.redirect('http://localhost:3005')
})

app.use((error, req, res, next) => {
    res.status(500).send(error.message)
})

module.exports = app
