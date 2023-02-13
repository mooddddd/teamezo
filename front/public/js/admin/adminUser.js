// 수정 버튼 클릭시 페이지 이동하기
const updateBtn = document.querySelectorAll(".trBody > td > button")
const userid = document.querySelectorAll(".trBody > .userid")

for(let i = 0; i < Object.values(updateBtn).length; i++){
    const user = Object.values(userid)[i].innerHTML

    Object.values(updateBtn)[i].addEventListener("click", (e) => {
        draw()
        // location.href = `http://localhost:3005/admin/userEdit?user=${user}`
    })
}

// 특정회원 검색기능

// 페이징 기능
// 1. totalpage를 이용해서 각 버튼을 만든다.
// 2. 각 버튼을 클릭할 경우, 해당 버튼이 가진 값을 이용해서 화면의 첫번쨰 게시물의 idx를 결정한다.
// 3. 요청한 5개의 게시물을 가져와서, 템플릿을 이용해 각 태그에 내용을 끼워 넣는다.


const users = [
    {
        id: '강찬수1',
        name: '강찬수1',
        nickname: 'char1ey',
        gender: '남성',
        phone: "010-1234-1234",
        email: 'ckstn410@naver.com',
        point: 1500,
    },
    {
        id: '강찬수2',
        name: '강찬수2',
        nickname: 'char1ey',
        gender: '남성',
        phone: "010-1234-1234",
        email: 'ckstn410@naver.com',
        point: 1500,
    },
    {
        id: '강찬수3',
        name: '강찬수3',
        nickname: 'char1ey',
        gender: '남성',
        phone: "010-1234-1234",
        email: 'ckstn410@naver.com',
        point: 1500,
    },{
        id: '강찬수4',
        name: '강찬수4',
        nickname: 'char1ey',
        gender: '남성',
        phone: "010-1234-1234",
        email: 'ckstn410@naver.com',
        point: 1500,
    }
    ,{
        id: '강찬수5',
        name: '강찬수5',
        nickname: 'char1ey',
        gender: '남성',
        phone: "010-1234-1234",
        email: 'ckstn410@naver.com',
        point: 1500,
    }
]


// const userinfo = document.querySelectorAll(".userinfo")///

function draw(content){
    const template = document.querySelector("#template")
    const table = document.querySelector("#contentTable")
    const row = template.content.cloneNode(true) // tr > td
    table.append(row)
    const userinfo = document.querySelectorAll(".userinfo")
    const userinfoWrap = document.querySelectorAll(".userinfoWrap")
    console.log(userinfoWrap.length)
    a(userinfoWrap.length - 1)
}
draw()
draw()
draw()
draw()
draw()


function a (i){
    const userinfo = document.querySelectorAll(".userinfo")
    console.log("userinfo Object Values")
    console.log(Object.values(userinfo))
    console.log("userinfo Object Values")
    // for(let i = 0; i < users.length; i++){
        for(let j = 0; j < 7; j++ ){
            Object.values(userinfo)[j].innerHTML = Object.values(users[i])[j]
            Object.values(userinfo)[j].className = "SSibal"
        }
        
        return userinfo
    // }
}

//a()