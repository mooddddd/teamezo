class SearchController {
    constructor({ service }){
        this.SearchService = service
    }

    async postSearch(req, res, next){
        try {
            if( req.body.search ){
                const { subject, content, mainName, subName, hash, startNumber, endNumber, totalPage } = await this.SearchService.postSearch(req.body.search)
                res.json({ subject, content, mainName, subName, hash, startNumber, endNumber, totalPage })
            } else if ( req.body.category ){
                const { subject, content, mainName, subName, hash, startNumber, endNumber, totalPage } = await this.SearchService.postSearch(req.body.category)
                console.log(subName)
                res.json({ subject, content, mainName, subName, hash, startNumber, endNumber, totalPage })
            } else if ( req.body.tagName ){
                const { subject, content, mainName, subName, hash, startNumber, endNumber, totalPage } = await this.SearchService.postSearch(req.body.tagName)
                res.json({ subject, content, mainName, subName, hash, startNumber, endNumber, totalPage })
            } 
        } catch (error) {
            next(error)
        }
    }
}

module.exports = SearchController