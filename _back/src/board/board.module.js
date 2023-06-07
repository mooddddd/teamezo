const {
    sequelize: { models },
} = require("../../models");

const BoardRepo = require("./board.repository");
const BoardService = require("./board.service");
const BoardController = require("./board.controller");
const JWT = require("../../lib/jwt");
const crypto = require("crypto");
const jwt = new JWT({ crypto });

const boardRepo = new BoardRepo({ models });
const boardService = new BoardService({ boardRepo, jwt });
const boardController = new BoardController({ boardService });

module.exports = {
    boardController,
};
