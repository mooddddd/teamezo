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

const socket = io.connect("http://localhost:3000", {
    path: "/socket.io",
    transports: ["websocket"]
})

const chatContentsLeft = document.querySelector(".chatContentsLeft")
const chatContentsRight = document.querySelector(".chatContentsRight")
const chatBox = document.querySelector("#chatBox")
const input = document.querySelector("#chatBox > input")


chatBox.addEventListener("submit", (e) => {
    e.preventDefault()
    const { message } = e.target

    socket.emit('reply', message.value )

    const li = document.createElement('li')
    li.classList.add('chatContent')
    li.innerHTML = message.value

    chatContentsRight.append(li)
    chatContentsRight.scrollTop = chatContentsRight.scrollHeight
    e.target.reset()
    e.target.focus()
})

socket.on("reply", (dataValue) => {
    console.log(dataValue)
    const json = JSON.parse(dataValue)
    const { chunk, data } = json
    const li = document.createElement("li")
    li.classList.add("left")
    li.innerHTML = `<li class="chatUserName">${chunk}</li>
    <li class="chatContent">${data}</li>`
    chat.append(li)
    chat.scrollTop = chat.scrollHeight
})