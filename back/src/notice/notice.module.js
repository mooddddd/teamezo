const {
    sequelize: {
        models: { User, Board },
    },
} = require('../../models')

const NoticeRepository = require('./notice.repository')
const NoticeService = require('./notice.service')
const NoticeController = require('./notice.controller')

const noticeRepository = new NoticeRepository({ User, Board })
const noticeService = new NoticeService({ noticeRepository })
const noticeController = new NoticeController({ noticeService })

module.exports = {
    noticeController,
}
