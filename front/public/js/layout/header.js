const search = document.querySelector(".searchWrap")
const searchInput = document.querySelector("#search")
const searchIcon = document.querySelector("#searchIcon")
const searchBtn = document.querySelector("#searchBtn")

searchIcon.addEventListener("click", (e) => {
    if( searchInput.className === "invisible" ){
        searchInput.classList.remove("invisible")
    } else {
        searchInput.classList.add("invisible")
    }

    if( searchBtn.className === "invisible" ){
        searchBtn.classList.remove("invisible")
    } else {
        searchBtn.classList.add("invisible")
    }
})