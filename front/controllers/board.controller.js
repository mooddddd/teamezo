const axios = require("axios");
const request = axios.create({
    baseURL: "http://localhost:3000/board",
    withCredentials: true,
});

/* 리스트 */
exports.getList = async (req, res, next) => {
    try {
        const { token } = req.cookies
        const page = req.query.page;
        const response = await request.get(`/list?page=${page}`,
        {
            params: { token },
        }
        );
        const { list, startNumber, endNumber, totalPage, listCount, imgArr } = response.data.listAll;
        const { mainCategory, subCategory } = response.data.category;
        const btnNumber = [];
        for (let i = startNumber; i <= endNumber; i++) {
            btnNumber.push(i);
        }

        for(let i = 0; i <= list.length - 1; i++){
            list[i].createAt = list[i].createAt.split("T")[0]
        }
        
        res.render("board/category/boardList.html", { list, mainCategory, subCategory, btnNumber, totalPage, listCount, imgArr, token });
    } catch (e) {
        next(e)
    }
};

/* 글작성 */
exports.getWrite = async (req, res, next) => {
    try {
        const { token } = req.cookies
        const response = await request.get("/write");
        const { mainCategory, subCategory } = response.data;
        res.render("board/category/boardWrite.html", { mainCategory, subCategory, token });
    } catch (e) {
        next(e)
    }
};

/* 뷰 view */
exports.getView = async (req, res, next) => {
    try {
        const { token } = req.cookies
        const id = req.query.id;
        const result = await request.get(`/view?id=${id}`);
        if( result.data.content.visible ){
            const { content, hashtag, files, commentResult, replyResult } = result.data;
            content.token = token
            content.createAt = content.createAt.split("T")[0]
            res.render("board/category/boardView.html", { content, hashtag, files, commentResult, replyResult, token });
        } else {
            res.render("inaccessible.html")
        }
    } catch (error) {
        next(error)
    }
};

/* 댓글 */
exports.postComment = async (req, res, next) => {
    try {
        const value = req.body;
        const response = await request.post("/view/comment", value);
        res.redirect(`/board/view?id=${response.data.boardId}`);
    } catch (e) {
        next(e)
    }
};
