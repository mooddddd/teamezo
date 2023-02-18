const axios = require("axios")
const request = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
})

// 글 목록(8개만), 메인카테고리 목록, 해시태그 목록, 유저 포인트 높은순서로 불러오기

exports.getIndex = async (req, res, next) => {
    try {
        const { token } = req.cookies
        const result = await request.get('/')
        const { boardList, mainName, tagName } = result.data
        const list =  boardList
        if (Object.values(req.query).length) {
            res.setHeader('Set-Cookie', `token=${req.query.token};path=/;`)
            res.render("index.html", { list, mainName, tagName, token })
        } else {
            const { token } = req.cookies
            const result = await request.get('/')
            const { boardList, mainName, tagName } = result.data
            const list =  boardList
            res.render("index.html", { list, mainName, tagName, token })
        }
    } catch (error) {
        next(error)
    }
}