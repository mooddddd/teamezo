/* 클릭시 좋아요 이미지 변경*/
const changeIMG = document.querySelector(".changeIMG");
const img = document.querySelectorAll(".changeIMG > img");

const arr = Object.values(img); // 리턴값->배열 : 유사배열 벗기기

const clickHandler = async (e) => {
    // const {boardId, userid} = 어디서 받아오지
    const response = await axios.post("http://localhost:3000/board/list", { boardId: "50", userid: "char1ey" });

    if (response.data != 1) {
        e.target.removeAttribute("src");
        e.target.setAttribute("src", "/img/thumsupClick.png");
        console.log(e.target);
    } else {
        e.target.removeAttribute("src");
        e.target.setAttribute("src", "/img/thumsup.png");
    }
};

for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", clickHandler);
} // 모든 이미지에 이벤트 걸어버려서 e.target에 걸리는 애는 그냥 바로 이벤트 걸리게 만들어놓음
