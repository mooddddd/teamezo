class UserService {
    constructor({ userRepository, jwt }) {
        this.userRepository = userRepository
        this.jwt = jwt
        this.crypto = jwt.crypto
    }

    // async loginChk({ userid, userpw }) {
    //     try {
    //         if (!userid || !userpw) throw '아이디 패스워드없음 이쪽 나중에수정'
    //         const payload = {
    //             userid,
    //             userpw,
    //         }
    //         const user = await this.userRepository.checkLogin(payload)

    //         // const algorithm = process.env.ALGORITHM
    //         // const typ = process.env.TYP
    //         // const option = { algorithm, typ }
    //         // const hash = jwt.sign(user.userid, process.env.SALT, option)
    //         res.json(hash)
    //     } catch (e) {
    //         next(e)
    //     }
    // }

    // async getInfo(token) {
    //     try {
    //         const { userid } = this.jwt.verify(token, process.env.SALT)
    //         const user = await this.userRepository.getUserById(userid)
    //         return user
    //     } catch (e) {
    //         throw new Error(e)
    //     }
    // }

    async loginIdChk({ userid }) {
        try {
            const userId = await this.userRepository.checkUserId({ userid })

            if (userId === null) {
                return userId
            } else throw '아이디 중복인디?!'
        } catch (e) {
            throw new Error(e)
        }
    }

    async userCheck({ userid, page }) {
        try {
            const user = await this.userRepository.getUserByInfo({ userid, page })
            return user
        } catch (e) {
            throw new Error(e)
        }
    }

    /** 회원가입  */
    async joinChk(payload) {
        try {
            if (!payload.userid) throw '값을 입력해주세요'

            const hash = this.crypto
                .createHmac('sha256', process.env.SALT)
                .update(payload.userpw)
                .digest('hex')
            const [user, created] = await this.userRepository.addUser({
                userid: payload.userid,
                userpw: hash,
                username: payload.username,
                email: payload.email,
            })

            if (created === false) throw '아이디 중복된다구~'
            return user
        } catch (e) {
            throw new Error(e)
        }
    }
    /** 회원가입  */
}

module.exports = UserService
