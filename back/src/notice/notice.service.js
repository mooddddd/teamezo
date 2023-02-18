class NoticeService {
    constructor({ noticeRepository }) {
        this.noticeRepository = noticeRepository
    }

    async getList(userid, page) {
        try {
            const userBoardInfo = await this.noticeRepository.getNoticeList(userid, page)
            return userBoardInfo
        } catch (e) {
            throw new Error(e)
        }
    }

    async postNoticeContent(body, files) {
        const { tagName, ...rest } = body

        const filenameArr = files.map((v) => v.filename)
        const insertContent = await this.noticeRepository.insertContent(rest, filenameArr)
        return insertContent
    }
}

module.exports = NoticeService
