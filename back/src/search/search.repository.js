class SearchRepository {
    constructor({ models, Op, sequelize }){
        this.models = models
        this.Op = Op
        this.sequelize = sequelize
    }

    async findSearch (searchValue){
        try {
            console.log(searchValue)
            const result = await Promise.all([
                this.models.Board.findAll({ where:{ subject : {[this.Op.like]: "%" + searchValue + "%"}}, raw: true}),
                this.models.Board.findAll({ where:{ content : {[this.Op.like]: "%" + searchValue + "%"}}, raw: true }),
                this.models.HashTag.findAll({ where:{ tagName : {[this.Op.like]: "%" + searchValue + "%"}}, raw: true })
            ])
            
            return result
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = SearchRepository