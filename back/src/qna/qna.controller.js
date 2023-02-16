class QnaController {
    constructor({ qnaService }) {
        this.qnaService = qnaService
    }

    async getBoardList(req, res, next) {
        try {
            console.log('qnaController')
            const userId = req.query.token
            const { page } = req.query
            console.log(req.query.token)
            console.log('qnaControllerqnaControllerqnaController')
            console.log(req.query)
            const userInfo = await this.qnaService.getList(userId, page)
            res.json(userInfo)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = QnaController
