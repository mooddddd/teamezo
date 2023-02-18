class AuthController {
    constructor({ authService }) {
        this.authService = authService
    }

    async postLogin(req, res, next) {
        try {
            const { userid, userpw } = req.body
            const token = await this.authService.token({ userid, userpw })
            // const [header, payload, signature] = token.split('.')
            res.json(token)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = AuthController
