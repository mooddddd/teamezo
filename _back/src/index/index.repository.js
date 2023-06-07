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

            
            let likedNumber = []
            
            for(let i = 0; i <= fileUrlList.length - 1; i++){
                const idx = fileUrlList[i].id
                const liked = await this.models.Liked.findAll({
                    raw: true, 
                    where: {boardId: idx}
                })
                likedNumber.push(liked.length)
            }
            
            return { fileUrlList, likedNumber }
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