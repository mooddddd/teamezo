class SearchController {
    constructor({ service }){
        this.SearchService = service
    }

    async postSearch(req, res, next){
        try {
            const { subject, content, hash } = await this.SearchService.postSearch(req.body.search)
            res.json({ subject, content, hash })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = SearchController