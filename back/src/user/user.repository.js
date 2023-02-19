const board = require('../../dummy/board_data')
const { Op } = require('sequelize')

class UserRepository {
    constructor({ User, Board }) {
        this.User = User
        this.Board = Board
    }

    // async checkLogin(payload) {
    //     try {
    //         const { userid, userpw } = { ...payload }
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

            return user
        } catch (e) {
            throw new Error(e)
        }
    }
    async checkUserId({ userid }) {
        try {
            const user = await this.User.findOne({
                where: {
                    userid,
                },
                raw: true,
            })
            return user
        } catch (e) {
            throw new Error(e)
        }
    }

    async addUser(userInfo) {
        try {
            const [user, created] = await this.User.findOrCreate({
                where: { userid: userInfo.userid },
                defaults: {
                    userpw: userInfo.userpw,
                    username: userInfo.username,
                    email: userInfo.email,
                },
                raw: true,
            })
            return [user, created]
        } catch (e) {
            throw new Error(e)
        }
    }

    async getInfo(kakaoUserData) {
        try {
            const [user, created] = await this.User.findOrCreate({
                where: { userid: kakaoUserData.userid },
                defaults: {
                    userpw: kakaoUserData.userpw,
                    username: kakaoUserData.username,
                    email: kakaoUserData.email,
                    provider: kakaoUserData.provider,
                    avatarUrl: kakaoUserData.avatarUrl,
                },
                raw: true,
            })

            const token = kakaoUserData.userid

            return token
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = UserRepository
