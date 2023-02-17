const express = require('express')
const router = express.Router()
const controller = require("../controllers/index.controller");

// 랭킹 요청 코드(백서버에서 작업) : [ {}, {}, {}, ...]
// 글 리스트 가져오기 : [{}, {}, {}, {}, ...]
router.get('/', (req, res) => {
    const ranklist = [
        {
            rank: 1,
            userid: '일등',
        },
        {
            rank: 2,
            userid: '이등',
        },
        {
            rank: 3,
            userid: '삼등',
        },
        {
            rank: 4,
            userid: '사등',
        },
        {
            rank: 5,
            userid: '오등',
        },
        {
            rank: 6,
            userid: '육등',
        },
        {
            rank: 7,
            userid: '칠등',
        },
        {
            rank: 8,
            userid: '팔등',
        },
        {
            rank: 9,
            userid: '구등',
        },
        {
            rank: 10,
            userid: '십등',
        },
    ]

    const board = [
        {
            url: '/img/header.png',
            subject: '제목1',
            reply: 5,
            nickname: 'char1ey',
            register: '2023-02-11',
            totalLiked: 429,
        },
        {
            url: '/img/header.png',
            subject: '제목1',
            reply: 5,
            nickname: 'char1ey',
            register: '2023-02-11',
            totalLiked: 429,
        },
        {
            url: '/img/header.png',
            subject: '제목1',
            reply: 5,
            nickname: 'char1ey',
            register: '2023-02-11',
            totalLiked: 429,
        },
        {
            url: '/img/header.png',
            subject: '제목1',
            reply: 5,
            nickname: 'char1ey',
            register: '2023-02-11',
            totalLiked: 429,
        },
        {
            url: '/img/header.png',
            subject: '제목1',
            reply: 5,
            nickname: 'char1ey',
            register: '2023-02-11',
            totalLiked: 429,
        },
        {
            url: '/img/header.png',
            subject: '제목1',
            reply: 5,
            nickname: 'char1ey',
            register: '2023-02-11',
            totalLiked: 429,
        },
        {
            url: '/img/header.png',
            subject: '제목1',
            reply: 5,
            nickname: 'char1ey',
            register: '2023-02-11',
            totalLiked: 429,
        },
        {
            url: '/img/header.png',
            subject: '제목1',
            reply: 5,
            nickname: 'char1ey',
            register: '2023-02-11',
            totalLiked: 429,
        },
        {
            url: '/img/header.png',
            subject: '제목1',
            reply: 5,
            nickname: 'char1ey',
            register: '2023-02-11',
            totalLiked: 429,
        },
        {
            url: '/img/header.png',
            subject: '제목1',
            reply: 5,
            nickname: 'char1ey',
            register: '2023-02-11',
            totalLiked: 429,
        },
    ]
    // if (req.cookies.token) {
    //     console.log(board)
    //     res.render('index.html', { userid, ranklist, board })
    // } else {
    //     res.render('index.html', { ranklist, board })
    // }
    //console.log(Boolean(Object.values(req.query).length))
    if (Object.values(req.query).length) {
        res.setHeader('Set-Cookie', `token=${req.query.token};path=/;`)
        res.render('index.html')
    } else {
        res.render('index.html')
    }
})

module.exports = router
