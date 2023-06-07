const {
    sequelize: {
        models: { User, Board },
    },
} = require('../../models')

const UserRepository = require('./user.repository')
const UserService = require('./user.service')
const UserController = require('./user.controller')
const UserKakao = require('./user.kakao')
const JWT = require('../../lib/jwt')
const crypto = require('crypto')
const jwt = new JWT({ crypto })

const userRepository = new UserRepository({ User, Board })
const userService = new UserService({ userRepository, jwt })
const userController = new UserController({ userService })
const userKakao = new UserKakao({ userRepository, jwt })

module.exports = {
    userController,
    userKakao,
}
