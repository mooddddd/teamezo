class BoardController {
    constructor({ boardService }) {
        this.boardService = boardService;
    }

    // 리스트
    async getList(req, res, next) {
        try {
            console.log(req.query.token);
            const listAll = await this.boardService.getList(req.query.page, req.query.token);
            const category = await this.boardService.getCategory();
            // token이랑 page 값 넘겨서 있냐 없냐 확인
            res.json({ listAll, category });
        } catch (e) {
            next(e);
        }
    }
    async postListLiked(req, res, next) {
        try {
            const result = await this.boardService.postListLiked(req.body);
            res.json(result);
        } catch (e) {
            next(e);
        }
    }

    // 뷰
    async getview(req, res, next) {
        try {
            // console.log(req.query.id); // 1
            const id = req.query.id;
            const result = await this.boardService.getview(id);
            res.json(result);
        } catch (e) {
            throw new Error(e);
        }
    }

    // 댓글 작성
    async getComment(req, res, next) {
        console.log(req.body);
        return res.send("왔습니당");
    }

    // 글 작성
    async getWirte(req, res, next) {
        try {
            const result = await this.boardService.getCategory();
            res.json(result);
        } catch (e) {
            next(e);
        }
    }

    async postWrite(req, res, next) {
        try {
            const { body, files } = req;
            const result = await this.boardService.postBoardContent(body, files);

            res.json(result);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = BoardController;
