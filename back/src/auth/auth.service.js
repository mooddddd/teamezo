class AuthService {
    constructor({ authRepository, jwt, crypto }) {
        this.authRepository = authRepository
        this.jwt = jwt
        this.crypto = crypto
    }

    async token({ userid, userpw }) {
        try {
            if (!userid || !userpw) throw '입력하셈'
            const hash = this.crypto.createHmac('sha256', 'teamezo').update(userpw).digest('hex')
            console.log('hash')
            console.log(hash)
            const user = await this.authRepository.getUserInfo({ userid, userpw: hash })
            console.log('service user')
            console.log(user)

            // const token = this.jwt.sign(user)
            // console.log('auth.service token')
            console.log(user.userid)
            return user
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = AuthService
