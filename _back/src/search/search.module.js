const { sequelize: { models } } = require('../../models/index')
const { sequelize } = require('../../models/index')
const { Op } = require('sequelize')

const SearchRepository = require('./search.repository')
const SearchService = require('./search.service')
const SearchController =require('./search.controller')

const repository = new SearchRepository({ models, Op, sequelize })
const service = new SearchService({ repository })
const controller = new SearchController({ service })

module.exports = {
    controller
}