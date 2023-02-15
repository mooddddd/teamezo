const axios = require("axios");

exports.getList = async (req, res) => {
    try {
        const page = req.query.page;
        const response = await axios.get(`http://localhost:3000/board/list?page=${page}`);
        // const boardList = response.data.boardList; // 게시물 전체  boardList:[{},{},{}]
        console.log(response);
        const { boardList, startNumber, endNumber, totalPage, listCount } = response.data.listAll;
        const { mainCategory, subCategory } = response.data.category;
        // 카테고리 전체 {mainCategory:[{},{},{}], subCategory:[{},{},{}]}
        const btnNumber = [];
        for (let i = startNumber; i <= endNumber; i++) {
            btnNumber.push(i);
        }
        console.log(totalPage);

        res.render("board/category/boardList.html", { boardList, mainCategory, subCategory, btnNumber, totalPage, listCount });
    } catch (e) {
        throw new Error(e);
    }
};

exports.getWrite = (req, res) => {
    try {
        const category = [
            { MainCategory: "IT", subName: ["css", "html", "nodejs"] },
            { MainCategory: "찬수", subName: ["1", "2", "3"] },
            { MainCategory: "홍태", subName: ["하나", "둘", "셋"] },
            { MainCategory: "은지", subName: ["원", "투", "쓰리"] },
            // { MainCategory: "food", subName: ["한식", "양식", "몰라,,,"] },
        ];
        res.render("board/category/boardWrite.html", { category });
    } catch (e) {
        throw new Error(e);
    }
};

exports.postWrite = (req, res) => {};

exports.getView = async (req, res) => {
    // findOne 해와야 함
    const id = req.query.id;
    const content = await axios.get(`http://localhost:3000/board/view?id=${id}`);
    const contentResult = content.data;

    // const commentResult = [
    //     {
    //         commentidx: 1,
    //         user_userid: "test",
    //         content: "sdfasgasfsd",
    //         createAt: "2023 - 01 -30",
    //         avatar: "profileEdit.PNG",
    //     },
    //     {
    //         commentidx: 2,
    //         user_userid: "test",
    //         content: "sdfasgasfsd",
    //         createAt: "00000000",
    //         avatar: "profileEdit.PNG",
    //     },
    //     {
    //         commentidx: 3,
    //         user_userid: "test",
    //         content: "sdfasgasfsd",
    //         createAt: "00000000",
    //         avatar: "profileEdit.PNG",
    //     },
    // ];

    // const commentReplyResult = [
    //     {
    //         commentidx: 1,
    //         replyidx: 1,
    //         user_userid: "ㅁㄴㅇㄹ",
    //         content: "대댓 테스트ddddddd",
    //         createAt: "2023-01-01",
    //     },
    //     {
    //         commentidx: 1,
    //         replyidx: 2,
    //         user_userid: "ㅁㄴㅇㄹ",
    //         content: "대댓 테스트ddddddd",
    //         createAt: "2023-01-01",
    //     },
    //     {
    //         commentidx: 2,
    //         replyidx: 1,
    //         user_userid: "ㅁㄴㅇㄹ",
    //         content: "대댓 테스트ddddddd",
    //         createAt: "2023-01-01",
    //     },
    // ];

    // const commentCount = 2;
    res.render("board/category/boardView.html", { contentResult });
};

/*
총 게시물 먼저 가져오기
총 게시물 나누기 10 한다음에 올림처리 => 그러면 필요한 페이지 값(전체페이지 값)이 나옴
얘는 끝 넘버에서 필요

그런 다음 뒷자리가 1번째인 게시물 구하기(현재 위치가 될 애?) -> id 아님
스타트 넘버 : 현재 위치에서 10을 나누고 
엔드넘버

 */
