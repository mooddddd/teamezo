const board = []

for (let i = 0; i <= 50; i++) {
    const obj = {
        userid: `admin`,
        subject: `공지사항 : ${i}번 입니다.`,
        content: `내용 : ${i}`,
        mainName: 'IT',
        subName: 'css',
        notice: true,
    }

    board.push(obj)
}

module.exports = board
