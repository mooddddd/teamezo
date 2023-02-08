// const request = require("./axios.test");

exports.getList = async (req, res) => {
    // 게시물&카테고리 findAll 해와야 함(axios 사용), 좋아요 갯수는 게시물이랑 같이 받아와야 함
    // const list = await request.get();
    try {
        const category = [
            { MainCategory: "IT", subName: ["css", "html", "nodejs"] },
            { MainCategory: "food", subName: ["한식", "양식", "몰라,,,"] },
        ];
        const list = [
            {
                idx: "1",
                subject: "제목입니다!",
                user_userid: "mood",
                createAt: "2023 - 01 - 31",
                liked: "124",
            },
            {
                idx: "2",
                subject: "제목입니다!1222",
                user_userid: "mood222",
                createAt: "2023 - 01 - 31",
                liked: "14",
            },
        ];
        res.render("board/category/boardList.html", { list, category });
    } catch (e) {
        throw new Error(e);
    }
};

exports.getWrite = (req, res) => {
    const category = [
        { MainCategory: "IT", subName: ["css", "html", "nodejs"] },
        { MainCategory: "찬수", subName: ["1", "2", "3"] },
        { MainCategory: "홍태", subName: ["하나", "둘", "셋"] },
        { MainCategory: "은지", subName: ["원", "투", "쓰리"] },
        // { MainCategory: "food", subName: ["한식", "양식", "몰라,,,"] },
    ];
    res.render("board/category/boardWrite.html", { category });
};

exports.getView = (req, res) => {
    // findOne 해와야 함
    res.render("board/view.html");
};
