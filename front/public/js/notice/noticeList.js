const pageNumber = document.querySelectorAll('.pageNumber')

for (let i = 0; i < Object.values(pageNumber).length; i++) {
    const number = Object.values(pageNumber)[i].innerHTML

    Object.values(pageNumber)[i].addEventListener('click', (e) => {
        location.href = `http://localhost:3005/notice/list?page=${number}`
    })
}
