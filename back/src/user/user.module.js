const {
    sequelize: {
        models: { User },
    },
} = require('../../models')

const UserController = require('./user.controller')

const userController = new UserController({})
module.exports = {
    userController,
}
