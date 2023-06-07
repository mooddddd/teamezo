class AuthService {
    constructor({ authRepository, jwt, crypto }) {
        this.authRepository = authRepository
        this.jwt = jwt
        this.crypto = crypto
    }

    async token({ userid, userpw }) {
        try {
            if (userid && userpw) {
                const hash = this.crypto.createHmac('sha256', 'teamezo').update(userpw).digest('hex')
                const user = await this.authRepository.getUserInfo({ userid, userpw: hash })
                return user
            } else {
                throw '아이디 혹은 비밀번호를 입력해주세요'
            }
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = AuthService
