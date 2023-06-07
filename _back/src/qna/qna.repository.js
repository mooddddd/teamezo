class QnaRepository {
    constructor({ User, Board, Qna, Comment, File }) {
        this.User = User
        this.Board = Board
        this.Qna = Qna
        this.File = File
        this.Comment = Comment
    }

    async getQnaList(userid, page) {
        try {
            // Paging 처리
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

            const totalPage = Math.ceil(pageNum.length / 5)
            let current = Number(page) * 5 - 4
            let startNumber = current / 5 - ((current / 5) % 5) + 1
            let endNumber = current / 5 - ((current / 5) % 5) + 5

            if (endNumber > totalPage) {
                endNumber = totalPage
            }

            return { pageNum, startNumber, endNumber, totalPage, boardList }
        } catch (e) {
            throw new Error(e)
        }
    }

    async insertContent(rest, filenameArr) {
        const result = await this.Qna.create(rest)

        const files = filenameArr.map((fileUrl) =>
            this.models.File.create({ fileUrl, boardId: result.id })
        )

        await Promise.all(files)
        // 파일 넣어주고 끝, 빼올 때는 id 찾아서 fileUrl 가져오면 됨 // 배열에 담기겠지?
        return result.id // 리턴값으로 board 테이블의 id를 반환
    }

    async getViewContent(id) {
        try {
            // const addHit = await this.models.Board.update()
            const result = await this.Qna.findOne({ where: { id: `${id}` } })
            return result
        } catch (e) {}
    }

    async getViewFiles(id) {
        const filesResult = await this.File.findAll({ raw: true, where: { boardId: id } })
        return filesResult
    }

    async getViewComment(id) {
        const commentResult = await this.Comment.findAll({
            raw: true,
            where: { boardId: id, classNum: 0 },
        })
        const replyResult = await this.Comment.findAll({
            raw: true,
            where: { boardId: id, classNum: 1 },
        })
        return { commentResult, replyResult }
    }
}

module.exports = QnaRepository
