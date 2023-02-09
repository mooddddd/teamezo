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

        const count = 214;
        res.render("board/category/boardList.html", { list, category, count });
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
    const contentResult = {
        cookies: "cookies와 user_userid 값이 같아야 수정, 삭제 버튼 뜨도록 넌작스로 처리함",
        board_idx: 1,
        mainName: "은지",
        subject: "제목 어쩌구 저쩌구",
        user_userid: "작성자테스트",
        createAt: "2023 - 01 - 31",
        content: "내용 어쩌구",
        tagName: ["# 해시태그1", "# 해시태그2", "# 해시태그3"],
        liked: "1",
    };

    const commentResult = [
        {
            commentidx: 1,
            user_userid: "test",
            content: "sdfasgasfsd",
            createAt: "2023 - 01 -30",
            avatar: "profileEdit.PNG",
        },
        {
            commentidx: 2,
            user_userid: "test",
            content: "sdfasgasfsd",
            createAt: "00000000",
            avatar: "profileEdit.PNG",
        },
        {
            commentidx: 3,
            user_userid: "test",
            content: "sdfasgasfsd",
            createAt: "00000000",
            avatar: "profileEdit.PNG",
        },
    ];

    const commentReplyResult = [
        {
            commentidx: 1,
            replyidx: 1,
            user_userid: "ㅁㄴㅇㄹ",
            content: "대댓 테스트ddddddd",
            createAt: "2023-01-01",
        },
        {
            commentidx: 1,
            replyidx: 2,
            user_userid: "ㅁㄴㅇㄹ",
            content: "대댓 테스트ddddddd",
            createAt: "2023-01-01",
        },
        {
            commentidx: 2,
            replyidx: 1,
            user_userid: "ㅁㄴㅇㄹ",
            content: "대댓 테스트ddddddd",
            createAt: "2023-01-01",
        },
    ];

    const commentCount = 2;
    res.render("board/view.html", { contentResult, commentResult, commentCount, commentReplyResult });
};
