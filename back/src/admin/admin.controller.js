class AdminController {
    constructor({ service }){
        this.AdminService = service
    }

    async getUser(req, res, next){
        try {
            const { page } = req.query
            const result = await this.AdminService.getAll( page )
            res.json(result)
        } catch (error) {
            next(error)
        }
    }

    // user검색기능 json : { "userid" : "아이디" }
    async postUser(req, res, next){
        try {
            const { userid } = req.body
            const result = await this.AdminService.postOne( userid )
            res.json( result )
        } catch (error) {
            next(error)
        }
    }

    async getUserEdit(req, res, next){
        try {
            const { userid } = req.query
            const result = await this.AdminService.postOne( userid )
            res.json( result )
        } catch (error) {
            next(error)
        }
    }

    async postUserEdit(req, res, next){
        try {
            const { path } = req.body
            const { body } = req.body
            const result = await this.AdminService.putUserEdit(path, body)
            res.json(result)
        } catch (error) {
            next(error)
        }
    }

    async getBoard(req, res, next){
        try {
            if(req.query.order){
                const { page, order } = req.query
                const result = await this.AdminService.getAllBoard( page, order )
                res.json(result)
            } else {
                const { page } = req.query
                const result = await this.AdminService.getAllBoard( page )
                res.json(result)
            }
        } catch (error) {
            next(error)
        }
    }

    async postBoard(req, res, next){
        try {
            const { boardId, visible } = req.body
            const result = await this.AdminService.postBoard( boardId, visible )
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = AdminController