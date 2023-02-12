const {
    sequelize: {
        models: { User },
    },
} = require("../../models");

const UserController = require("./user.controller");
// const UserService = require('./user.service')

const userController = new UserController({});
module.exports = {
    userController,
};
