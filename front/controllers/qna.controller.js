const axios = require('axios')
const request = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    withCredentials: true,
})
const board = 'qna'

exports.getList = (req, res) => {
    list = []
    count = 0
    res.render('board/qna/qnaList.html', { count, board })
}

exports.getView = (req, res) => {
    try {
        res.render('board/view.html', { board })
    } catch (e) {
        throw new Error(e)
    }
}

exports.getWrite = (req, res) => {
    try {
        // admin token인지 아닌지 확인 후 아니면 history 써서 뒤로 가게
        res.render('board/qna/qnaWrite.html', { board })
    } catch (e) {
        throw new Error(e)
    }
}
