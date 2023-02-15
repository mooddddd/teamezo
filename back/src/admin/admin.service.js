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
}

module.exports = AdminService