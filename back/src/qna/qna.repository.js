class QnaRepository {
    constructor({ User, Board, Qna }) {
        this.User = User
        this.Board = Board
        this.Qna = Qna
    }

    async getNoticeList(userid, page) {
        try {
            // Paging 처리
            const Op = console.log('qna repository :: ')
            console.log(userid)
            console.log(page)
            const pageNum = await this.Qna.findAll({
                raw: true,
                order: [['id', 'desc']],
            })
            const boardList = await this.Qna.findAll({
                offset: Number(page) * 5 - 5,
                limit: 5,
                order: [['id', 'desc']],
                raw: true,
            })

            console.log('pageNum!!!!!!!!')
            console.log(pageNum)
            const totalPage = Math.ceil(pageNum.length / 5)
            let current = Number(page) * 5 - 4
            let startNumber = current / 5 - ((current / 5) % 5) + 1
            let endNumber = current / 5 - ((current / 5) % 5) + 5

            if (endNumber > totalPage) {
                endNumber = totalPage
            }

            console.log('qna repository after ::')
            console.log(boardList.length)
            console.log(boardList)
            return { pageNum, startNumber, endNumber, totalPage, boardList }
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = QnaRepository
