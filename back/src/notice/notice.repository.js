class NoticeRepository {
    constructor({ User, Board }) {
        this.User = User
        this.Board = Board
    }

    async getNoticeList(userid, page) {
        try {
            // Paging 처리
            console.log('notice repository :: ')
            console.log(userid)
            console.log(page)
            const pageNum = await this.Board.findAll({
                raw: true,
                where: { userid: 'admin' },
                order: [['id', 'desc']],
            })
            // console.log('pageNum')
            // console.log(pageNum)
            const userAdmin = await this.User.findOne({
                raw: true,
                attributes: ['admin'],
                where: { userid: userid },
            })
            console.log('pageNum.length!!!')
            const totalPage = Math.ceil(pageNum.length / 5)
            let current = Number(page) * 5 - 4
            let startNumber = current / 5 - ((current / 5) % 5) + 1
            let endNumber = current / 5 - ((current / 5) % 5) + 5

            if (endNumber > totalPage) {
                endNumber = totalPage
            }

            const boardList = await this.Board.findAll({
                offset: Number(page) * 5 - 5,
                limit: 5,
                where: { userid: 'admin' },
                order: [['id', 'desc']],
                raw: true,
            })
            console.log('notice repository after ::')
            console.log(pageNum.length)
            console.log(boardList)
            return { pageNum, startNumber, endNumber, totalPage, userAdmin, boardList }
        } catch (e) {
            throw new Error(e)
        }
    }

    async insertContent(rest, filenameArr) {
        const result = await this.models.Board.create(rest)

        const files = filenameArr.map((fileUrl) =>
            this.models.File.create({ fileUrl, boardId: result.id })
        )

        await Promise.all(files)
        // 파일 넣어주고 끝, 빼올 때는 id 찾아서 fileUrl 가져오면 됨 // 배열에 담기겠지?
        console.log('result.id')
        console.log(result.id)
        return result.id // 리턴값으로 board 테이블의 id를 반환
    }
}

module.exports = NoticeRepository
