const profileSubject = document.querySelectorAll('.profileSubject')
const profileBtn = Object.values(profileSubject)
const profileContents = document.querySelectorAll('.profileContents')
const profileContentBtn = Object.values(profileContents)
const prev = document.querySelector('.prev > a')
const next = document.querySelector('.next > a')
const resultLengthHidden = document.querySelector('.resultLengthHidden')
const resultHidden = document.querySelectorAll('.resultHidden')

for (let i = 0; i < profileBtn.length; i++) {
    profileBtn[i].addEventListener('click', (e) => {
        if (i === 0) {
            profileContentBtn[0].className = 'profileContents'
            profileContentBtn[1].className = 'profileContents off'
            profileContentBtn[2].className = 'profileContents off'
        } else if (i === 1) {
            profileContentBtn[0].className = 'profileContents off'
            profileContentBtn[1].className = 'profileContents'
            profileContentBtn[2].className = 'profileContents off'
        } else {
            profileContentBtn[0].className = 'profileContents off'
            profileContentBtn[1].className = 'profileContents off'
            profileContentBtn[2].className = 'profileContents'
        }
    })
}
prev.addEventListener('click', (e) => {
    let count = 1
    count--
    location.href = `http://127.0.0.1:3005/user/profile?page=${count}`
})

next.addEventListener('click', (e) => {
    let count = 1
    location.href = `http://127.0.0.1:3005/user/profile?page=${count}`
    count++
})
