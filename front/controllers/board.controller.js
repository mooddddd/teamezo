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
        // { params: { token: `${req.cookies.token}` } }
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

exports.getModify = async (req, res) => {
    try {
        const id = req.query.id;
        const response = await request.get(`/modify?id=${id}`);
        const { rest, mainCategory, subCategory } = response.data;
        const { content, hashtag, files } = rest;
        console.log(files);

        res.render("board/category/boardEdit.html", { content, hashtag, files, mainCategory, subCategory });
    } catch (e) {
        throw new Error(e);
    }
};

/* 뷰 view */
exports.getView = async (req, res) => {
    // findOne 해와야 함
    const id = req.query.id;
    const result = await request.get(`/view?id=${id}`);
    const { content, hashtag, files, commentResult, replyResult } = result.data;
    const commentCount = commentResult.length + replyResult.length;
    res.render("board/category/boardView.html", { content, hashtag, files, commentResult, replyResult, commentCount });
};

/* 댓글 */
exports.postComment = async (req, res) => {
    try {
        const value = req.body;
        const response = await request.post("/view/comment", value);
        res.redirect(`/board/view?id=${response.data.boardId}`);
    } catch (e) {
        throw new Error(e);
    }
};
