const app = require('./app')
const socketIO = require('./socket')
const { sequelize } = require('./models')
const port = process.env.PORT || 3000

const user = require("./dummy/user_data");
const mainCategory = require("./dummy/cate_data");
const subCategory = require("./dummy/sub_data");
const board = require("./dummy/board_data");

const http = app.listen(3000, async () => {
    await sequelize.sync({ force: false });
    console.log("Database Connected!");

    // for (let i = 0; i <= user.length - 1; i++) {
    //     await sequelize.models.User.create(user[i]);
    // }

    // for (let i = 0; i <= mainCategory.length - 1; i++) {
    //     await sequelize.models.MainCategory.create(mainCategory[i]);
    // }

    // for (let i = 0; i <= subCategory.length - 1; i++) {
    //     await sequelize.models.SubCategory.create(subCategory[i]);
    // }

    // for (let i = 0; i <= board.length - 1; i++) {
    //     await sequelize.models.Board.create(board[i]);
    // }

    // await sequelize.models.HashName.create({ tagName: "javascript" });
    // await sequelize.models.HashName.create({ tagName: "c++" });
    // await sequelize.models.HashName.create({ tagName: "html" });
    // await sequelize.models.HashName.create({ tagName: "IT" });

    // for (let i = 0; i <= board.length - 1; i++) {
    //     await sequelize.models.HashTag.create({ boardId: i, tagName: "IT" });
    // }

    // await sequelize.models.Comment.create({ content: "첫번째 댓글", class: 1, boardId: 1, groupNum: 1, userid: "char1ey" });
    // await sequelize.models.Comment.create({ content: "첫번째 대댓글", class: 2, boardId: 1, groupNum: 1, userid: "char1ey" });
    // await sequelize.models.Comment.create({ content: "두번째 대댓글", class: 2, boardId: 1, groupNum: 1, userid: "char1ey" });
    // await sequelize.models.Comment.create({ content: "세번째 대댓글", class: 2, boardId: 1, groupNum: 1, userid: "char1ey" });
    // await sequelize.models.Comment.create({ content: "네번째 대댓글", class: 2, boardId: 1, groupNum: 1, userid: "char1ey" });
    // await sequelize.models.Comment.create({ content: "다섯번째 댓글", class: 1, boardId: 1, groupNum: 1, userid: "char1ey" });
    // await sequelize.models.Comment.create({ content: "두번째 댓글", class: 1, boardId: 1, userid: "char1ey" });
    // await sequelize.models.Comment.create({ content: "세번째 댓글", class: 1, boardId: 1, userid: "char1ey" });
    // await sequelize.models.Comment.create({ content: "네번째 댓글", class: 1, boardId: 1, userid: "char1ey" });
    // await sequelize.models.Comment.create({ content: "다섯번째 댓글", class: 1, boardId: 1, userid: "char1ey" });

    // for(let i = 1; i <= 51; i++){
    //     await sequelize.models.File.create({ fileUrl: "uploads/asdf.jpg", boardId: i });
    // }

    console.log(`Running on http://localhost:${port}`)
})

socketIO(http, app)
