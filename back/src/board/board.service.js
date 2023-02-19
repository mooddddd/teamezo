class BoardService {
    constructor({ boardRepo, jwt }) {
        this.boardRepo = boardRepo
        this.jwt = jwt
        this.crypto = jwt.crypto
    }

    async getCategory() {
        try {
            const categoryList = await this.boardRepo.getCategoryList()
            return categoryList
        } catch (error) {
            throw new Error(error)
        }
    }
    async getList(page, userid) {
        try {
            const boardList = await this.boardRepo.getBoardList(page, userid)
            const liked = await this.boardRepo.getLikedCheck(userid);
            
            for(let i = 0; i <= boardList.list.length - 1; i++){
                boardList.list[i].likedNumber = boardList.likedNumber[i]
            }

            let likedArr = []
            
            for(let i = 0; i <= liked.length - 1; i++){
                likedArr.push(liked[i].boardId)
            }
            
            for(let i = 0; i <= boardList.list.length - 1; i++){
                for(let j = 0; j <= likedArr.length - 1; j++){
                    if( boardList.list[i].id === likedArr[j] ){
                        boardList.list[i].liked = true
                    } else {
                        boardList.list[i].liked = false
                    }
                }
            }

            return boardList
        } catch (e) {
            throw new Error(e)
        }
    }

    async getview(id) {
        try {
            const { dataValues: content } = await this.boardRepo.getViewContent(id)
            const hashtag = await this.boardRepo.getViewHashTag(id)
            const files = await this.boardRepo.getViewFiles(id)
            const { commentResult, replyResult } = await this.boardRepo.getViewComment(id)
            // const likedCount = await this.boardRepo.getLikedCount(id);
            // const comment = await this.boardRepo.getViewComment(id);

            return { content, hashtag, files, commentResult, replyResult }
        } catch (e) {
            throw new Error(e)
        }
    }

    async postComment(value) {
        try {
            const { dataValues: comment } = await this.boardRepo.insertComment(value)
            return comment
        } catch (error) { 
            throw new Error(error)
        }
    }

    async postListLiked(body) {
        try {
            const { boardId, userid } = body
            const result = await this.boardRepo.postListLiked(userid, boardId)
            return result
        } catch (error) {
            throw new Error(error)
        }
    }

    async postBoardContent(body, files) {
        try {
            const { tagName, ...rest } = body
            if (tagName) {
                const tagArr = tagName.split(',') //['sadf','dfs','asdfsa']
                const filenameArr = files.map((v) => v.filename)
                const insertContent = await this.boardRepo.insertContent(rest, filenameArr, tagArr)
                return insertContent
            } else {
                const filenameArr = files.map((v) => v.filename)
                const insertContent = await this.boardRepo.insertContent(rest, filenameArr)
                return insertContent
            }
    
            // const insertFile = await this.boardRepo.insertFile(filenameArr);
            // const 파일 네임 넣는 함수 사용해서 파일네임 넣어주고
    
            // 리턴값으로 받아옴
            // 그런 다음 온 데이터를 넌작스로 파일명 뿌려주고, html 내에는 path{{파일명}} 해주면?
            // 그냥 넣기만 하고 끝? 그리고 가져오는 작업은 getView에다가 하면 되나...
    
            // 리턴값으로 들어간 데이터의 id를 리턴해줌
        } catch (error) {
            throw new Error(error)
        }
    }
    
    async postDelete(id){
        try {
            const result = await this.boardRepo.postDelete(id)
            return result
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = BoardService
