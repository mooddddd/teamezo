// const request = require("./axios.test");

exports.getList = async (req, res) => {
    // 게시물&카테고리 findAll 해와야 함(axios 사용) => 그럼 불러오는 함수 2개 필요
    // const list = await request.get();
    res.render("board/category/boardList.html");
};

exports.getWrite = (req, res) => {
    res.render("board/category/boardWrite.html");
};

exports.getView = (req, res) => {
    // findOne 해와야 함
    res.render("board/view.html");
};
