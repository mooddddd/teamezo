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

    async postWrite(req, res, next) {
        try {
            const { body, files } = req
            console.log(req.cookies)
            console.log('req.bodyreq.bodyreq.bodyreq.body')
            console.log(req.body)
            console.log(req.cookies)
            console.log('notice postWirte!')
            const result = await this.noticeService.postNoticeContent(body, files)

            res.json(result)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = NoticeController
