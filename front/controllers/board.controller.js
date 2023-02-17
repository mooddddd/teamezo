const axios = require("axios");

exports.getList = async (req, res, next) => {
    // 게시물&카테고리 findAll 해와야 함(axios 사용), 좋아요 갯수는 게시물이랑 같이 받아와야 함
    // const list = await request.get();
    try {
        const response = await axios.get("http://localhost:3000/board/list");
        const boardList = response.data.boardList; // 게시물 전체  boardList:[{},{},{}]
        const { mainCategory, subCategory } = response.data.categoryList;
        // 카테고리 전체 {mainCategory:[{},{},{}], subCategory:[{},{},{}]}

        res.render("board/category/boardList.html", { boardList, mainCategory, subCategory });
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
