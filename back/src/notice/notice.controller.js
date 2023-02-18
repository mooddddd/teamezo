class NoticeController {
    constructor({ noticeService }) {
        this.noticeService = noticeService
    }

    async getBoardList(req, res, next) {
        try {
            const userId = req.query.token
            const { page } = req.query
            const userInfo = await this.noticeService.getList(userId, page)
            res.json(userInfo)
        } catch (e) {
            next(e)
        }
    }

    async postWrite(req, res, next) {
        try {
            const { body, files } = req
            const result = await this.noticeService.postNoticeContent(body, files)

            res.json(result)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = NoticeController
