class AdminController {
    constructor({ service }){
        this.AdminService = service
    }

    async getAll(req, res, next){
        try {
            const result = await this.AdminService.getServiceAll()
            res.json(result) // [ {}, {}, ... ]
        } catch (error) {
            next(error)
        }
    }
}

module.exports = AdminController