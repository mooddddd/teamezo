class NoticeController {
    constructor({ noticeService }) {
        this.noticeService = noticeService
    }

    async getBoardList(req, res, next) {
        try {
            console.log('noticeController')
            const userId = req.query.token
            const { page } = req.query
            console.log(req.query.token)
            console.log('noticeControllernoticeControllernoticeController')
            console.log(req.query)
            const userInfo = await this.noticeService.getList(userId, page)
            res.json(userInfo)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = NoticeController
