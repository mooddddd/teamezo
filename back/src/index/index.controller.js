class IndexController {
    constructor({ service }){
        this.IndexService = service
    }

    async getIndex(req, res, next){
        try {
            const result = await this.IndexService.getIndex()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = IndexController