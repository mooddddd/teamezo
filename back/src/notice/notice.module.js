const {
    sequelize: {
        models: { User, Board },
    },
} = require('../../models')

const NoticeRepository = require('./Notice.repository')
const NoticeService = require('./Notice.service')
const NoticeController = require('./Notice.controller')

const noticeRepository = new NoticeRepository({ User, Board })
const noticeService = new NoticeService({ noticeRepository })
const noticeController = new NoticeController({ noticeService })

module.exports = {
    noticeController,
}
