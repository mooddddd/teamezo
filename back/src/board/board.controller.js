class BoardController {
    constructor({ boardService }) {
        this.boardService = boardService;
    }

    async getList(req, res, next) {
        try {
            const listAll = await this.boardService.getList();
            res.json(listAll);
        } catch (e) {
            next(e);
        }
    }

    async getview(req, res, next) {
        try {
            // console.log(req.query.id); // 1
            const id = req.query.id;
            const result = await this.boardService.getview(id);
            res.json(result);
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
}

module.exports = BoardController;
