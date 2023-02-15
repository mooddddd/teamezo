class BoardService {
    constructor({ boardRepo, jwt }) {
        this.boardRepo = boardRepo;
        this.jwt = jwt;
        this.crypto = jwt.crypto;
    }

    async getList() {
        try {
            const categoryList = await this.boardRepo.getCategoryList();
            const boardList = await this.boardRepo.getBoardList();

            // const userid = await 받아온 token값으로 유저 찾아오기
            // const listLikedTnF = await this.boardRepo.getLiked(userid);
            // where userid해서 liked 테이블 데이터 가져오기
            // 가져올 데이터 : boardId를 배열 형태로? for문 같은 걸로 like 배열과 unlike 배열로 나누기
            // 전체 배열에 있는 애를 페이징에 맞춰 자른 다음 보내기?

            return { categoryList, boardList };
        } catch (e) {
            throw new Error(e);
        }
    }

    async getview(id) {
        try {
            const content = await this.boardRepo.getViewContent(id);
            // const likedCount = await this.boardRepo.getLikedCount(id);
            // const comment = await this.boardRepo.getViewComment(id);
            // console.log(content.dataValues);
            return content.dataValues;
        } catch (e) {
            throw new Error(e);
        }
    }

    async postListLiked(body) {
        const { boardId, userid } = body;
        // console.log(boardId, userid);
        const result = await this.boardRepo.postListLiked(userid, boardId);
        return result;
    }
}

module.exports = BoardService;
