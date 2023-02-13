const board = []

for(let i = 0; i <= 50; i++){
    const obj = {
        subject:`제목 : ${i}번 입니다.`,
        content:`내용 : ${i}`,
        mainName:"IT",
        subName:"css",
        
    }
    
    board.push(obj)
}

module.exports = board