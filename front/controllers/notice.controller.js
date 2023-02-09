exports.getList = (req, res) => {
    const list = [
        {
            idx: 1,
            subject: "공지사항1",
            userid: "admin",
            createAt: "2023 - 01 -31",
            hit: "21",
        },
        {
            idx: 2,
            subject: "공지사항2",
            userid: "admin",
            createAt: "2023 - 01 -31",
            hit: "21",
        },
        {
            idx: 3,
            subject: "공지사항3",
            userid: "admin",
            createAt: "2023 - 01 -31",
            hit: "21",
        },
        {
            idx: 4,
            subject: "공지사항4",
            userid: "admin",
            createAt: "2023 - 01 -31",
            hit: "21",
        },
        {
            idx: 5,
            subject: "공지사항5",
            userid: "admin",
            createAt: "2023 - 01 -31",
            hit: "21",
        },
    ];
    const board = "notice"; // 레이아웃 경로 때문에 넣어줬어요!
    res.render("board/notice/noticeList.html", { list, board });
};
