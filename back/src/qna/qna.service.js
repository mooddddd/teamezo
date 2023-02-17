class QnaService {
    constructor({ qnaRepository }) {
        this.qnaRepository = qnaRepository
    }

    async getList(userid, page) {
        try {
            console.log('qna Service')
            console.log(userid)
            console.log(page)
            const userBoardInfo = await this.qnaRepository.getNoticeList(userid, page)
            console.log('notice Service after')
            console.log(userBoardInfo)
            return userBoardInfo
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = QnaService
