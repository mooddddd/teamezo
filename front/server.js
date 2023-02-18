const app = require('./app')
// step1. 카카오에 던진당!
const HOST = `https://kauth.kakao.com`
const REST_API_KEY = '065e5cf7cddbc2e79fc060f0c29fc9f6'
const REDIRECT_URI = 'http://localhost:3000/oauth/kakao'
const CLIENT_SECRET = 'TbEqrKTj3AWkGW4MAsVGROx0DpK3UUKS'

app.get('/kakao/login', (req, res) => {
    const redirectURI = `${HOST}/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
    res.redirect(redirectURI)
})

app.use((error, req, res, next) => {
    res.status(500).send(error.message)
})

app.listen(3005, () => {
    console.log(`front server start`)
})
