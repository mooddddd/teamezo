const axios = require("axios");
const request = axios.create({
    baseURL: "http://127.0.0.1:3000",
    withCredentials: true,
});

const board = "notice";

exports.getList = async (req, res) => {
    try {
        // const listtest = await request.get("/board/notice/list");
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
        res.render("board/notice/noticeList.html", { list, board });
    } catch (e) {
        throw new Error(e);
    }
};

exports.getview = (req, res) => {
    try {
        const contentResult = {
            cookies: "cookies와 user_userid 값이 같아야 수정, 삭제 버튼 뜨도록 넌작스로 처리함",
            board_idx: 1,
            subject: "notice 제목 테스트!",
            user_userid: "공지테스트",
            createAt: "2023 - 01 - 31",
            content: "공지사항이 어쩌구",
        };
        const commentCount = "123";
        res.render("board/view.html", { contentResult, commentCount, board });
    } catch (e) {
        throw new Error(e);
    }
};
