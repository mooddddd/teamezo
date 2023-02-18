class UserController {
    constructor({ userService }) {
        this.userService = userService
    }

    async postLoginChk(req, res, next) {
        try {
            const { userid } = req.body
            const user = await this.userService.loginIdChk({ userid })
            res.json(user)
        } catch (e) {
            next(e)
        }
    }

    async getProfile(req, res, next) {
        try {
            const { userid, page } = req.query
            const [getUserProfile] = await this.userService.userCheck({ userid, page })
            res.json(getUserProfile)
        } catch (e) {
            next(e)
        }
    }

    async postJoin(req, res, next) {
        try {
            const { userid, userpw, username, email } = req.body
            const userInfo = await this.userService.joinChk({
                userid,
                userpw,
                username,
                email,
            })
            const a = {
                userid: userInfo.dataValues.userid,
                username: userInfo.dataValues.username,
                email: userInfo.dataValues.email,
            }
            res.json(a)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = UserController
