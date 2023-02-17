class IndexRepository {
    constructor({ models }){
        this.models = models
    }
    async getIndexBoard (){
        try {
            const result = await this.models.Board.findAll({ raw: true, offset: 0, limit: 8, order: [['id', 'desc']], include: {
                    model: this.models.File,
                    attributes:{ exclude: ["id", "boardId"] },
                    nest: true,
                }
            })

            const fileUrlList = result.map((item, index, array) => {
                item.fileUrl = item['Files.fileUrl']
                return item
            })

            return { fileUrlList }
        } catch (error) {
            throw new Error(error)
        }
    }

    async getIndexCategory (){
        try {
            const result = await this.models.MainCategory.findAll({raw: true, offset: 0, limit: 5 })
            return result
        } catch (error) {
            next(error)
        }
    }

    async getIndexHashtag () {
        try {
            const result = await this.models.HashName.findAll({ raw: true, offset: 0, limit: 5 })
            return result
        } catch (error) {
            next(error)
        }
    }
}

module.exports = IndexRepository