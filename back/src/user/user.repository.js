const board = require('../../dummy/board_data')

class UserRepository {
    constructor({ User, Board }) {
        this.User = User
        this.Board = Board
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

    async getUserByInfo({ userid, page = 1 }) {
        try {
            console.log('repository userid')
            console.log({ userid, page })
            const user = await this.User.findAll({
                where: {
                    userid,
                },
                include: {
                    model: this.Board,
                    offset: Number(page) * 5 - 4, // Current
                    limit: 5,
                    order: [['id', 'desc']],
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
