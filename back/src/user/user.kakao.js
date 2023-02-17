class UserKakao {
    constructor({ userRepository, jwt }) {
        this.userRepository = userRepository
        this.jwt = jwt
        this.crypto = jwt.crypto
    }

    async addKakaoInfo(kakaoData) {
        try {
            console.log('kakaoUser')
            const kakaoDataId = kakaoData.id.toString()

            const hash = this.crypto
                .createHmac('sha256', process.env.SALT)
                .update(kakaoDataId)
                .digest('hex')

            const kakaoUser = {
                userid: kakaoDataId,
                userpw: hash,
                username: kakaoData.properties.nickname,
                email: kakaoData.kakao_account.email,
                avatarUrl: kakaoData.properties.profile_image,
                provider: 'kakao',
            }

            const user = await this.userRepository.getInfo(kakaoUser)
            console.log('user.controller getMyInfo')
            console.log(user)
            return user
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = UserKakao
