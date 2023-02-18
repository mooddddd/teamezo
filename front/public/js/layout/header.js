const logout = document.querySelector(".logout_box")

if(logout !== null) {
    logout.addEventListener("click", (e) => {
        e.preventDefault()
        deleteCookie(document.cookie.split("=")[0])
        console.log(document.cookie)
        location.href = 'http://localhost:3005/'
    })
}


function deleteCookie(key){
    let todayDate = new Date()
    document.cookie = key + "=; path=/; expires=" + todayDate.toGMTString() + ";"   
}