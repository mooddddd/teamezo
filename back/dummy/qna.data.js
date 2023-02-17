const qna = []

for (let i = 0; i <= 50; i++) {
    const obj = {
        subject: `QNA : ${i}번 입니다.`,
        content: `내용 : ${i}`,
        password: `password${i}`,
    }

    qna.push(obj)
}

module.exports = qna
