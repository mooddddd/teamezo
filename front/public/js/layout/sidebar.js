const hamburgerBtn = document.querySelector(".hamburgerBtn")
const cancleBtn = document.querySelector(".cancleBtn")
const sidebarWrap = document.querySelector("#sidebarWrap")

cancleBtn.addEventListener("click", (e) => {
    sidebarWrap.style.display = "none"
    hamburgerBtn.style.right = "-3rem"
    setTimeout(() => {
        hamburgerBtn.style.display = "block"
    },)
})

hamburgerBtn.addEventListener("click", (e) => {
    sidebarWrap.style.display = "block"
    hamburgerBtn.style.right = "-50rem"
    setTimeout(() => {
        hamburgerBtn.style.display = "none"
    },300)
    sidebarWrap.style["z-index"] = 10
})
