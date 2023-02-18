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
// const chatSpaceContent = document.querySelector("#chatSpaceContent")

chatBox.addEventListener("submit", (e) => {
    e.preventDefault()
    const userid = document.cookie.split("=")[1]
    const { message } = e.target
    
    socket.emit('data', { message: message.value, userid } )

    const ul = document.createElement('ul')
    const li = document.createElement('li')
    ul.classList.add("chatContentsRight")
    li.innerHTML = `<li class="chatContent">${message.value}</li>`

    ul.append(li)
    chatSpace.append(ul)
    chatSpace.scrollTop = chatSpace.scrollHeight
    e.target.reset()
    e.target.focus()
})

socket.on("reply", (dataValue) => {
    const json = JSON.parse(dataValue)
    console.log(json)
    const { userid, data } = json
    const ul = document.createElement("ul")
    const li = document.createElement("li")
    ul.classList.add("chatContentsLeft")
    // li.classList.add("left")
    li.innerHTML = `<li class="chatUserName">${userid}</li>
    <li class="chatContent">${data}</li>`
    ul.append(li)
    chatSpace.append(ul)
    chatSpace.scrollTop = chatSpace.scrollHeight
})