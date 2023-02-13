class UserController {
    constructor({ userService }) {
        this.userService = userService
    }

    // async postLogin(req, res, next) {
    //     try {
    //         const { userid, userpw } = req.body
    //         const user = await this.userService.loginChk({ userid, userpw })
    //         res.json(user)
    //     } catch (e) {
    //         next(e)
    //     }
    // }

    async getProfile(req, res, next) {
        try {
            const { userid } = req.query
            const [getUserProfile] = await this.userService.userCheck({ userid })
            console.log('getUserProfile user')
            console.log(getUserProfile)
            res.json(getUserProfile)
        } catch (e) {
            next(e)
        }
    }

    async postJoin(req, res, next) {
        try {
            const { userid, userpw, username, email } = req.body
            console.log('useridadasdasd')
            console.log(email)
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
