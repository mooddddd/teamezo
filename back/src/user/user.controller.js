class UserController {
    constructor({ userService }) {
        this.userService = userService
    }

    async postLogin(req, res, next) {
        // 다작성했다 치고
        console.log(req)
        const result = {
            token: 'asd',
            user: {
                userid: req.body.userid,
                username: req.body.userpw,
            },
        }
        res.json(result)
    }
}

module.exports = UserController
