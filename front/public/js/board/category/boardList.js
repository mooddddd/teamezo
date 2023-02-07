const changeIMG = document.querySelector(".changeIMG");
const img = document.querySelectorAll(".changeIMG > img");

const arr = Object.values(img); // 리턴값->배열
// 유사배열 벗기기

const clickHandler = (e) => {
    console.log(e.target.src);
    if (e.target.getAttribute("src") === "/img/thumsup.png") {
        e.target.removeAttribute("src");
        e.target.setAttribute("src", "/img/thumsupClick.png");
        // 좋아요 했다는 데이터 백으로 보내기! axios
    } else if (e.target.getAttribute("src") === "/img/thumsupClick.png") {
        e.target.removeAttribute("src");
        e.target.setAttribute("src", "/img/thumsup.png");
        // 좋아요 취소헀다는 데이터 백으로 보내기! axios
    }
};

for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", clickHandler);
}

// 모든 이미지에 이벤트 걸어버려서 e.target에 걸리는 애는 그냥 바로 이벤트 걸리게 만들어놓음
