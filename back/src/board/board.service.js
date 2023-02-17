const { TableHints } = require("sequelize");

class BoardService {
    constructor({ boardRepo, jwt }) {
        this.boardRepo = boardRepo;
        this.jwt = jwt;
        this.crypto = jwt.crypto;
    }

    async getCategory() {
        const categoryList = await this.boardRepo.getCategoryList();
        return categoryList;
    }
    async getList(page) {
        try {
            const boardList = await this.boardRepo.getBoardList(page);
            // const likedCheck = await this.boardRepo.getLikedCheck(page, token);

            // console.log(boardList);

            // const userid = await 받아온 token값으로 유저 찾아오기
            // const listLikedTnF = await this.boardRepo.getLiked(userid);
            // where userid해서 liked 테이블 데이터 가져오기
            // 가져올 데이터 : boardId를 배열 형태로? for문 같은 걸로 like 배열과 unlike 배열로 나누기
            // 전체 배열에 있는 애를 페이징에 맞춰 자른 다음 보내기?

            return boardList;
        } catch (e) {
            throw new Error(e);
        }
    }

    async getview(id) {
        try {
            const { dataValues: content } = await this.boardRepo.getViewContent(id);
            const hashtag = await this.boardRepo.getViewHashTag(id);
            const files = await this.boardRepo.getViewFiles(id);
            const { commentResult, replyResult } = await this.boardRepo.getViewComment(id);
            // const likedCount = await this.boardRepo.getLikedCount(id);
            // const comment = await this.boardRepo.getViewComment(id);
            // console.log(content.dataValues);

            return { content, hashtag, files, commentResult, replyResult };
        } catch (e) {
            throw new Error(e);
        }
    }

    async postComment(value) {
        const { dataValues: comment } = await this.boardRepo.insertComment(value);
        return comment;
    }

    async postListLiked(body) {
        const { boardId, userid } = body;
        // console.log(boardId, userid);
        const result = await this.boardRepo.postListLiked(userid, boardId);
        return result;
    }

    async postBoardContent(body, files) {
        const { tagName, ...rest } = body;
        const tagArr = tagName.split(","); //['sadf','dfs','asdfsa']
        const filenameArr = files.map((v) => v.filename);

        const insertContent = await this.boardRepo.insertContent(tagArr, rest, filenameArr);
        // const insertFile = await this.boardRepo.insertFile(filenameArr);
        // const 파일 네임 넣는 함수 사용해서 파일네임 넣어주고

        // 리턴값으로 받아옴
        // 그런 다음 온 데이터를 넌작스로 파일명 뿌려주고, html 내에는 path{{파일명}} 해주면?
        // 그냥 넣기만 하고 끝? 그리고 가져오는 작업은 getView에다가 하면 되나...

        // 리턴값으로 들어간 데이터의 id를 리턴해줌
        return insertContent;
    }
}

module.exports = BoardService;
