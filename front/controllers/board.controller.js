const axios = require("axios");
const request = axios.create({
    baseURL: "http://localhost:3000/board",
    withCredentials: true,
});

/* 리스트 */
exports.getList = async (req, res) => {
    try {
        const { token } = req.cookies
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

        res.render("board/category/boardList.html", { list, mainCategory, subCategory, btnNumber, totalPage, listCount, imgArr, token });
    } catch (e) {
        throw new Error(e);
    }
};

/* 글작성 */
exports.getWrite = async (req, res) => {
    try {
        const { token } = req.cookies
        const response = await request.get("/write");
        const { mainCategory, subCategory } = response.data;
        res.render("board/category/boardWrite.html", { mainCategory, subCategory, token });
    } catch (e) {
        throw new Error(e);
    }
};
// exports.postWrite = (req, res) => {}; // 포스트는 브라우저에서 바로 백으로 넘김

/* 뷰 view */
exports.getView = async (req, res) => {
    const { token } = req.cookies
    const id = req.query.id;
    const result = await request.get(`/view?id=${id}`);
    if( result.data.content.visible ){
        const { content, hashtag, files, commentResult, replyResult } = result.data;
        content.userid = token
        res.render("board/category/boardView.html", { content, hashtag, files, commentResult, replyResult, token });
    } else {
        res.render("inaccessible.html")
    }
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
