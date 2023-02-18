class AdminRepository {
    constructor({ models }){
        this.models = models
    }

    async getUser (page){
        try {
            const pageNum = await this.models.User.findAll({ raw: true, })
            const totalPage = Math.ceil(pageNum.length / 5)
            let current = Number(page)*5-4
            
            let startNumber = current/5 - (current/5 % 5) + 1
            let endNumber = current/5 - (current/5 % 5) + 5

            if( endNumber > totalPage ){
                endNumber = totalPage
            }

            const userList = await this.models.User.findAll({ offset: Number(page)*5 - 4, limit: 5 })
            return { userList, startNumber, endNumber, totalPage }
        } catch (error) {
            throw new Error(error)
        }
    }

    async findUser( userid ){
        try {
            const result = await this.models.User.findOne(
                { where : { userid : userid }, attributes:{ exclude: ["userpw"] },
            // include: { model: this.models.Board }
        })
            return result
        } catch(error) {
            throw new Error(error)
        }
    }

    async putUserEdit(userinfo){
        try {
            const result = await this.models.User.update( userinfo, { where: {userid: userinfo.userid}} )
            return result
        } catch (error) {
            throw new Error(error)
        }
    }

    async getBoard (page, order){
        try {
            const pageNum = await this.models.Board.findAll({ raw: true, })
            const totalPage = Math.ceil(pageNum.length / 5)
            let current = Number(page)*5-5
            
            let startNumber = current/5 - (current/5 % 5) + 1
            let endNumber = current/5 - (current/5 % 5) + 5

            if( endNumber > totalPage ){
                endNumber = totalPage
            }

            if( order === "hit" ){
                const boardList = await this.models.Board.findAll({
                    offset: Number(page)*5 - 5,
                    limit: 5,
                    order: [[`hit`, 'desc']],
                    raw: true,
                })
                let likedNumber = []
    
                for(let i = 0; i <= boardList.length - 1; i++){
                    const idx = boardList[i].id
                    const liked = await this.models.Liked.findAll({
                        raw: true, 
                        where: {boardId: idx}
                    })
                    likedNumber.push(liked.length)
                }
    
                return { boardList, startNumber, endNumber, totalPage, likedNumber }
            // }else if( order === "liked" ){
                // const boardList = await this.models.Board.findAll({
                //     offset: Number(page)*5 - 5,
                //     limit: 5,
                //     order: [[`hit`, 'desc']],
                //     raw: true,
                // })
                // let likedNumber = []
    
                // for(let i = 0; i <= boardList.length - 1; i++){
                //     const idx = boardList[i].id
                //     const liked = await this.models.Liked.findAll({
                //         raw: true, 
                //         where: {boardId: idx}
                //     })
                //     likedNumber.push(liked.length)
                // }
                // return { boardList, startNumber, endNumber, totalPage, likedNumber }
            } else {
                const boardList = await this.models.Board.findAll({
                    offset: Number(page)*5 - 5,
                    limit: 5,
                    raw: true,
                    order: [[`id`, 'desc']],
                })
    
                let likedNumber = []
    
                for(let i = 0; i <= boardList.length - 1; i++){
                    const idx = boardList[i].id
                    const liked = await this.models.Liked.findAll({
                        raw: true, 
                        where: {boardId: idx}
                    })
                    likedNumber.push(liked.length)
                }
    
                return { boardList, startNumber, endNumber, totalPage, likedNumber }
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    async postBoard(boardId, visible){
        try {
            await this.models.Board.update( { visible: visible }, { where: { id: Number(boardId) }})
        } catch (error) {
            throw new Error(error)
        }
    }

}

module.exports = AdminRepository