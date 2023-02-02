const agreeUse = document.querySelector('#agreeUse')
const agreeInfo = document.querySelector('#agreeInfo')

const toggle = (element) => {
    element.addEventListener('click', (e) => {
        e.target.classList.toggle("yellow")
    })
}

toggle(agreeUse)
toggle(agreeInfo)