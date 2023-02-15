const { sequelize: { models } } = require('../../models/index')

const AdminRepository = require('./admin.repository')
const AdminService = require('./admin.service')
const AdminController =require('./admin.controller')

const repository = new AdminRepository({ models })
const service = new AdminService({ repository })
const controller = new AdminController({ service })

module.exports = {
    controller
}