const { sequelize: { models } } = require('../../models/index')

const IndexRepository = require('./index.repository')
const IndexService = require('./index.service')
const IndexController =require('./index.controller')

const repository = new IndexRepository({ models })
const service = new IndexService({ repository })
const controller = new IndexController({ service })

module.exports = {
    controller
}