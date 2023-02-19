class BoardController {
    constructor({ boardService }) {
        this.boardService = boardService
    }

    // 리스트
    async getList(req, res, next) {
        try {
            console.log(req.query) // 왜 query에 token이 찍히지..?
            const listAll = await this.boardService.getList(req.query.page, req.query.token)
            const category = await this.boardService.getCategory()
            // token이랑 page 값 넘겨서 있냐 없냐 확인
            res.json({ listAll, category })
        } catch (e) {
            next(e)
        }
    }
    async postListLiked(req, res, next) {
        try {
            const result = await this.boardService.postListLiked(req.body)
            res.json(result)
        } catch (e) {
            next(e)
        }
    }

    // 뷰
    async getview(req, res, next) {
        try {
            const id = req.query.id
            const result = await this.boardService.getview(id)
            res.json(result)
        } catch (e) {
            next(e)
        }
    }

    // 댓글 작성
    async getComment(req, res, next) {
        try {
            const body = req.body
            const result = await this.boardService.postComment(body)
            res.json(result)
        } catch (e) {
            next(e)
        }
    }

    // 글 작성
    async getWirte(req, res, next) {
        try {
            const result = await this.boardService.getCategory()
            res.json(result)
        } catch (e) {
            next(e)
        }
    }

    async postWrite(req, res, next) {
        try {
            const { body, files } = req
            console.log(body)
            const result = await this.boardService.postBoardContent(body, files)

            res.json(result)
        } catch (e) {
            next(e)
        }
    }

    async postDelete(req, res, next){
        try {
            const result = await this.boardService.postDelete(req.query.id)
            res.json(result)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = BoardController
