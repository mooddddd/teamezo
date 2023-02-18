class AdminService {
    constructor({ repository }){
        this.AdminRepoistory = repository
    }

    async getAll( page ){
        try {
            const result = await this.AdminRepoistory.getUser( page )
            return result
        } catch (error) {
            throw new Error(error)
        }
    }

    async postOne( userid ){
        try {
            console.log(userid)
            const result = await this.AdminRepoistory.findUser( userid )
            return result
        } catch (error) {
            throw new Error(error)
        }
    }

    async putUserEdit(path, user){
        try {
            const userinfo = {...user}
            userinfo.avatarUrl = path
            const result = await this.AdminRepoistory.putUserEdit( userinfo )
            return result
        } catch (error) {
            throw new Error(error)
        }
    }

    async getAllBoard( page, order ){
        try {
            const result = await this.AdminRepoistory.getBoard( page, order )
            for(let i = 0; i <= result.boardList.length - 1; i++){
                result.boardList[i].liked = result.likedNumber[i]
                if( result.boardList[i].visible ){
                    result.boardList[i].visible = "이용가능"
                } else {
                    result.boardList[i].visible = "이용불가"
                }
            }
            return result
        } catch (error) {
            throw new Error(error)
        }
    }

    async postBoard(boardId, visible){
        try {
            if( visible === '이용가능'){
                visible = 0
            } else {
                visible = 1
            }
            const result = await this.AdminRepoistory.postBoard( boardId, visible )
            return result
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = AdminService