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
            console.log(result)
            res.json(result)
        } catch (error) {
            next(error)
        }
    }

}

module.exports = AdminController