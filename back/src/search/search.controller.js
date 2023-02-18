class SearchController {
    constructor({ service }){
        this.SearchService = service
    }

    async postSearch(req, res, next){
        try {
            const { subject, content, hash, startNumber, endNumber, totalPage } = await this.SearchService.postSearch(req.body.search)
            res.json({ subject, content, hash, startNumber, endNumber, totalPage })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = SearchController