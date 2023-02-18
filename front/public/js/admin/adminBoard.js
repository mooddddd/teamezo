// import request from '/js/admin/admin.axios.js'

const request = axios.create({
    baseURL: "http://localhost:3000/admin",
    withCredentials: true,
})

const order = location.search.split("=")[2]
const boardId = document.querySelectorAll(".boardId")
const updateBtn = document.querySelectorAll(".boardSubject")
const pageNum = Number(location.search.split("=")[1].split("&")[0])

for(let i = 0; i < Object.values(updateBtn).length; i++){
    const idx = Object.values(boardId)[i].textContent
    Object.values(updateBtn)[i].addEventListener("click", (e) => {
        location.href = `http://localhost:3005/board/view?id=${idx}`
    })
}

const pageNumber = document.querySelectorAll(".pageNumber")
const currentPageNumber = location.search.split("=")[1].split("&")[0]

for(let i = 0; i < Object.values(pageNumber).length; i++){
    if (Object.values(pageNumber)[i].textContent === currentPageNumber) {
        Object.values(pageNumber)[i].style.background = "#fdfdfd"
        Object.values(pageNumber)[i].style.color = "#526a7e"
    }
    const number = Object.values(pageNumber)[i].innerHTML
    Object.values(pageNumber)[i].addEventListener("click", (e) => {
        location.href = `http://localhost:3005/admin/board?page=${number}&order=${order}`
    })
}

const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")
const totalPage = document.querySelector("#totalPage")

prevBtn.addEventListener("click", (e) => {
    if( pageNum === 1 ) {
        location.href = `http://localhost:3005/admin/board?page=${1}&order=${order}`
        alert("첫번째 페이지입니다.")
    } else {
        location.href = `http://localhost:3005/admin/board?page=${pageNum-1}&order=${order}`
    }
})

nextBtn.addEventListener("click", (e) => {
    if( pageNum === Number(totalPage.value) ){
        alert("마지막페이지 입니다.")
    } else {
        location.href = `http://localhost:3005/admin/board?page=${pageNum+1}&order=${order}`
    }
})

const access = document.querySelectorAll(".access")

for(let i = 0; i <= access.length - 1; i ++){
    const idx = Object.values(boardId)[i].textContent
    const visible = Object.values(access)[i].textContent
    Object.values(access)[i].addEventListener("click", async (e) => {
        await request.post(`/board`, { boardId : idx, visible })
        location.href = `http://localhost:3005/admin/board?page=${pageNum}&order=${order}`
    })
}

const boardOrderBtn = document.querySelector(".adminBoardSearch > button")
const orderValue = document.querySelectorAll("#order > option")
const orderWrap =  document.querySelector("#order")

boardOrderBtn.addEventListener("click", (e) => {
    if(orderWrap.value === "liked"){
        location.href = `http://localhost:3005/admin/board?page=${pageNum}&order=liked`
    } else if ( orderWrap.value === "hit" ) {
        location.href = `http://localhost:3005/admin/board?page=${pageNum}&order=hit`
    } else {
        return
    }
})