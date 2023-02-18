const {
    sequelize: {
        models: { User, Board, Qna },
    },
} = require('../../models')

const QnaRepository = require('./qna.repository')
const QnaService = require('./qna.service')
const QnaController = require('./qna.controller')

const qnaRepository = new QnaRepository({ User, Board, Qna })
const qnaService = new QnaService({ qnaRepository })
const qnaController = new QnaController({ qnaService })

module.exports = {
    qnaController,
}
