class UserRepository {
    constructor({ User }) {
        this.User = User
    }

    // async checkLogin(payload) {
    //     try {
    //         const { userid, userpw } = { ...payload }
    //         console.log(userid)
    //         console.log(userpw)
    //         const user = await this.User.findOne({
    //             raw: true,
    //             where: {
    //                 userid,
    //                 userpw,
    //             },
    //         })
    //         if (user === null) throw '아이디가 없습니다'
    //         return user
    //     } catch (e) {
    //         next(e)
    //     }
    // }

    async getUserByInfo(userid) {
        try {
            console.log('repository userid')
            const user = await this.User.findAll({
                attribute: ['userid', 'username', 'email'],
                raw: true,
                nest: true,
                where: {
                    userid: userid.userid,
                },
            })
            console.log('repository user')
            console.log(user)

            return user
        } catch (e) {
            throw new Error(e)
        }
    }

    async addUser(userInfo) {
        try {
            console.log('user.repository')
            console.log(userInfo)

            const result = await this.User.create(userInfo, { raw: true })
            console.log('user.repository after')
            console.log(result)
            return result
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = UserRepository
