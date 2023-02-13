class AdminRepository {
    constructor({ models }){
        this.models = models
    }

    async getRepositoryAll (){
        try {
            const result = await this.models.findAll({ raw : true })
            return result
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = AdminRepository