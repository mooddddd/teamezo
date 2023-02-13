class AuthRepository {
    constructor({ User }) {
        this.User = User
    }

    async getUserInfo({ userid, userpw }) {
        try {
            console.log('auth.repository userid,userpw')
            console.log(userid)
            console.log(userpw)
            const user = await this.User.findOne({
                raw: true,
                attributes: { exclude: ['userpw'] },
                where: {
                    userid,
                    userpw,
                },
            })
            console.log('user ======')
            console.log(user)
            return user
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = AuthRepository
