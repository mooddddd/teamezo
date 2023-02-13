class AdminService {
    constructor({ repository }){
        this.AdminRepoistory = repository
    }

    async getServiceAll(){
        try {
            const result = await this.AdminRepoistory.getRepositoryAll()
            return result
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = AdminService