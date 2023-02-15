class UserKakao {
    constructor({ userRepository, jwt }) {
        this.userRepository = userRepository
        this.jwt = jwt
        this.crypto = jwt.crypto
    }

    // async addKakaoInfo(req, res, next) {
    //     try {
    //         console.log('req.headers.authorization')
    //         console.log(req.headers.authorization)
    //         console.log('kakaoUser')
    //         console.log(kakaoUser)
    //         if (!req.headers.authorization) throw new Error('Authorzation 없음...')
    //         const [type, token] = req.header.authorization.split(' ')
    //         console.log('user.Kakao token')
    //         console.log(token)
    //         if (type.toLowerCase() !== 'bearer') throw new Error('Authorization Type 에러입니다..')

    //         const user = await this.userRepository.getInfo(kakaoUser)
    //         console.log('user.controller getMyInfo')
    //         console.log(user)
    //         res.json(user)
    //     } catch (e) {
    //         next(e)
    //     }
    // }
}

module.exports = UserKakao
