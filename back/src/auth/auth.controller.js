class AuthController {
    constructor({ authService }) {
        this.authService = authService
    }

    async postLogin(req, res, next) {
        try {
            const { userid, userpw } = req.body
            const token = await this.authService.token({ userid, userpw })
            console.log('auth Controller token')
            console.log(token)
            // const [header, payload, signature] = token.split('.')
            // console.log('payload')

            // console.log(payload)

            res.json(token)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = AuthController
