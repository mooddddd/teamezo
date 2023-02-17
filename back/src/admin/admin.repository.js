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
}

module.exports = AdminRepository