const chatBtn = document.querySelector("#chatBtn")
const chatSpace = document.querySelector("#chatSpace")
const cancelBtn = document.querySelector("#cancelBtn")

chatBtn.addEventListener("click", (e) => {
    chatSpace.style.right = "5rem"
    e.target.style.opacity = 0
})

cancelBtn.addEventListener("click", (e) => {
    chatSpace.style.right = "-55rem"
    setTimeout(() => {
        chatBtn.style.opacity = 1
    }, 600)
})

// ================================ 채팅DOM
// 1. 전체 데이터 불러오기
// 2. 데이터 입력시 데이터 가져오기
