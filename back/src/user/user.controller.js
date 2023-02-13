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

    async postJoin(req, res, next) {
        try {
            const { userid, userpw, username } = req.body
            console.log('userid')
            console.log(userid)
            const userInfo = await this.userService.joinChk({
                userid,
                userpw,
                username,
            })
            console.log('user.controller after')
            const a = {
                userid: userInfo.dataValues.userid,
                username: userInfo.dataValues.username,
            }
            res.json(a)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = UserController
