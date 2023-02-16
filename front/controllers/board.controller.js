const axios = require("axios");

const request = axios.create({
    baseURL: "http://localhost:3000/board",
    withCredentials: true,
});

/* 리스트 */
exports.getList = async (req, res) => {
    try {
        const page = req.query.page;
        const response = await request.get(`/list?page=${page}`);
        // const boardList = response.data.boardList; // 게시물 전체  boardList:[{},{},{}]
        const { list, startNumber, endNumber, totalPage, listCount, imgArr } = response.data.listAll;
        const { mainCategory, subCategory } = response.data.category;
        // 카테고리 전체 {mainCategory:[{},{},{}], subCategory:[{},{},{}]}
        const btnNumber = [];
        for (let i = startNumber; i <= endNumber; i++) {
            btnNumber.push(i);
        }

        res.render("board/category/boardList.html", { list, mainCategory, subCategory, btnNumber, totalPage, listCount, imgArr });
    } catch (e) {
        throw new Error(e);
    }
};

/* 글작성 */
exports.getWrite = async (req, res) => {
    try {
        const response = await request.get("/write");
        const { mainCategory, subCategory } = response.data;
        res.render("board/category/boardWrite.html", { mainCategory, subCategory });
    } catch (e) {
        throw new Error(e);
    }
};
// exports.postWrite = (req, res) => {}; // 포스트는 브라우저에서 바로 백으로 넘김

/* 뷰 view */
exports.getView = async (req, res) => {
    // findOne 해와야 함
    const id = req.query.id;
    const result = await request.get(`/view?id=${id}`);
    const { content, hashtag, files } = result.data;
    res.render("board/category/boardView.html", { content, hashtag, files });
};

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
