const agreePopupBtn = document.querySelector("#agreePopupBtn")
const infoPopupBtn = document.querySelector("#infoPopupBtn")
const agreePopup = document.querySelector("#agreePopup")
const infoPopup = document.querySelector("#infoPopup")
const agreeCancle = document.querySelectorAll(".agreeCancle")

const cancleBtnArray = Object.values(agreeCancle)

// function popupOpen(element){
//     element.addEventListener("click", (e) => {
        
//     })
// }

agreePopupBtn.addEventListener("click", (e) => {
    agreePopup.style.opacity = "1"
    agreePopup.style["z-index"] = "5"
})

infoPopupBtn.addEventListener("click", (e) => {
    agreePopup.style.opacity = "1"
    agreePopup.style["z-index"] = "5"
})

cancleBtnArray[0].addEventListener("click", (e)=> {
    agreePopup.style.opacity = "0"
    agreePopup.style["z-index"] = "-5"
})

cancleBtnArray[1].addEventListener("click", (e)=> {
    agreePopup.style.opacity = "0"
    agreePopup.style["z-index"] = "-5"
})