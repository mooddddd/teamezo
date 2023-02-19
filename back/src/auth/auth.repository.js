class AuthRepository {
    constructor({ User }) {
        this.User = User
    }

    async getUserInfo({ userid, userpw }) {
        try {
            const user = await this.User.findOne({
                raw: true,
                attributes: { exclude: ['userpw'] },
                where: {
                    userid,
                    userpw,
                },
            })
            return user
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = AuthRepository
