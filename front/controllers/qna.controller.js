const axios = require('axios')
const request = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    withCredentials: true,
})
const board = 'qna'

exports.getList = async (req, res) => {
    try {
        const { token } = req.cookies
        // getList 시, token값(userid)로 admin인지 체크랑 , Board테이블에 notice true인것을 가져올거임
        const { page } = req.query
        const noticeList = await request.get(`/qna/list?page=${page}&token=${req.cookies.token}`)
        const { pageNum, startNumber, endNumber, totalPage, boardList } = noticeList.data
        const btnNumber = []
        for (let i = startNumber; i <= endNumber; i++) {
            btnNumber.push(i)
        }
        res.render('board/qna/qnaList.html', {
            pageNum,
            boardList,
            btnNumber,
            totalPage,
            token,
        })
    } catch (e) {
        throw new Error(e)
    }
}

exports.getView = (req, res) => {
    try {
        const { token } = req.cookies
        res.render('board/view.html', { board, token })
    } catch (e) {
        throw new Error(e)
    }
}

exports.getWrite = (req, res) => {
    try {
        const { token } = req.cookies
        // admin token인지 아닌지 확인 후 아니면 history 써서 뒤로 가게
        res.render('board/qna/qnaWrite.html', { board, token })
    } catch (e) {
        throw new Error(e)
    }
}
