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

    async postQnaWrite(req, res, next) {
        try {
            const { body, files } = req
            const result = await this.qnaService.postQnaContent(body, files)
            console.log('postQnaWrite')
            console.log(result)
            res.json(result)
        } catch (e) {
            next(e)
        }
    }

    async getview(req, res, next) {
        try {
            // console.log(req.query.id); // 1
            const id = req.query.id
            console.log('ididididid')
            console.log(id)
            const result = await this.qnaService.getview(id)
            res.json(result)
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = QnaController
