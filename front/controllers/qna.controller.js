exports.getList = (req, res) => {
    list = [];
    count = 0;
    res.render("board/qna/qnaList.html", { count });
};

exports.getView = (req, res) => {
    try {
        res.render("board/view.html");
    } catch (e) {
        throw new Error(e);
    }
};
