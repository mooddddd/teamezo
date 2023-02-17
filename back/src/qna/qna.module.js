const {
    sequelize: {
        models: { User, Board, Qna, File, Comment },
    },
} = require('../../models')

const QnaRepository = require('./Qna.repository')
const QnaService = require('./Qna.service')
const QnaController = require('./Qna.controller')

const qnaRepository = new QnaRepository({ User, Board, Qna, File, Comment })
const qnaService = new QnaService({ qnaRepository })
const qnaController = new QnaController({ qnaService })

module.exports = {
    qnaController,
}
