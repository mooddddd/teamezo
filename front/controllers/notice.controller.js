const axios = require('axios')
const request = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    withCredentials: true,
})

const board = 'notice'

exports.getList = async (req, res) => {
    try {
        const { token } = req.cookies
        // getList 시, token값(userid)로 admin인지 체크랑 , Board테이블에 notice true인것을 가져올거임
        const { page } = req.query
        const noticeList = await request.get(`/notice/list?page=${page}&token=${req.cookies.token}`)
        console.log('noticeList')
        console.log(noticeList)
        const { pageNum, startNumber, endNumber, totalPage, boardList } = noticeList.data
        const userAdmin = noticeList.data.userAdmin.admin
        const btnNumber = []
        for (let i = startNumber; i <= endNumber; i++) {
            btnNumber.push(i)
        }
        res.render('board/notice/noticeList.html', {
            boardList,
            pageNum,
            btnNumber,
            totalPage,
            userAdmin,
            token,
        })
    } catch (e) {
        throw new Error(e)
    }
}

exports.getView = (req, res) => {
    try {
        const { token } = req.cookies
        const contentResult = {
            cookies: 'cookies와 user_userid 값이 같아야 수정, 삭제 버튼 뜨도록 넌작스로 처리함',
            board_idx: 1,
            subject: 'notice 제목 테스트!',
            user_userid: '공지테스트',
            createAt: '2023 - 01 - 31',
            content: '공지사항이 어쩌구',
        }
        const commentCount = '123'
        res.render('board/view.html', { contentResult, commentCount, board, token })
    } catch (e) {
        throw new Error(e)
    }
}

exports.getWrite = (req, res) => {
    try {
        const { token } = req.cookies
        const board = 'notice' // 레이아웃때문에 넣어줘야 함
        res.render('board/notice/noticeWrite.html', { board, token })
    } catch (e) {
        throw new Error(e)
    }
}

exports.postWrite = (req, res) => {
    try {
        console.log(req.body)
    } catch (e) {
        throw new Error(e)
    }
}