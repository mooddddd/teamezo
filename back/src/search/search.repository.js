class SearchRepository {
    constructor({ models, Op, sequelize }){
        this.models = models
        this.Op = Op
        this.sequelize = sequelize
    }

    async findSearch (searchValue){
        try {
            const pageNum = await this.models.Board.findAll({ raw: true, })
            const totalPage = Math.ceil(pageNum.length / 10)
            let current = 0
            let startNumber = current/5 - (current/5 % 5) + 1
            let endNumber = current/5 - (current/5 % 5) + 5

            if( endNumber > totalPage ){
                endNumber = totalPage
            }
            console.log(searchValue)
            const result = await Promise.all([
                this.models.Board.findAll(
                    {
                        where:{ subject : {[this.Op.like]: "%" + searchValue + "%"}},
                        raw: true,
                        offset: 0,
                        limit: 10,
                    }),
                this.models.Board.findAll(
                    {
                        where:{ content : {[this.Op.like]: "%" + searchValue + "%"}},
                        raw: true,
                        offset: 0,
                        limit: 10,
                    }),
                this.models.Board.findAll(
                    {
                        where:{ mainName : {[this.Op.like]: "%" + searchValue + "%"}},
                        raw: true,
                        offset: 0,
                        limit: 10,
                    }),
                this.models.Board.findAll(
                    {
                        where:{ subName : {[this.Op.like]: "%" + searchValue + "%"}},
                        raw: true,
                        offset: 0,
                        limit: 10,
                    }),
                this.models.HashTag.findAll(
                    {
                        where:{ tagName : {[this.Op.like]: "%" + searchValue + "%"}},
                        raw: true,
                        offset: 0,
                        limit: 10,
                    })
            ])
            result.push(startNumber)
            result.push(endNumber)
            result.push(totalPage)
            console.log(result)
            return result
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = SearchRepository