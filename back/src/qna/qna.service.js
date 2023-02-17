class QnaService {
    constructor({ qnaRepository }) {
        this.qnaRepository = qnaRepository
    }

    async getList(userid, page) {
        try {
            console.log('qna Service')
            console.log(userid)
            console.log(page)
            const userBoardInfo = await this.qnaRepository.getQnaList(userid, page)
            console.log('notice Service after')
            console.log(userBoardInfo)
            return userBoardInfo
        } catch (e) {
            throw new Error(e)
        }
    }

    async postQnaContent(body, files) {
        const { ...rest } = body
        console.log("Object.values(rest)[2].split('=')[1]")
        rest.userid = Object.values(rest)[2].split('=')[1]
        console.log(rest)
        const filenameArr = files.map((v) => v.filename)
        const insertContent = await this.qnaRepository.insertContent(rest, filenameArr)
        return insertContent
    }

    async getview(id) {
        try {
            const { dataValues: content } = await this.qnaRepository.getViewContent(id)
            const files = await this.qnaRepository.getViewFiles(id)
            const { commentResult, replyResult } = await this.qnaRepository.getViewComment(id)

            return { content, files, commentResult, replyResult }
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = QnaService
