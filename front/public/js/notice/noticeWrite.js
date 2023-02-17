const writeDataForm = document.querySelector('.write > form')
const submitHandler = async (e) => {
    e.preventDefault()

    let body = new FormData(e.target)
    body.append('notice', true)
    body.append('userid', 'admin')
    const insertBoardContent = await axios.post('http://localhost:3000/notice/write', body, {
        header: {
            ['Content-type']: 'multipart/form-data',
            ['Set-Cookie']: `${document.cookie}`,
        },
    })
    console.log(
        'insertBoardContent.datainsertBoardContent.datainsertBoardContent.datainsertBoardContent.data'
    )
    console.log(insertBoardContent.data)
    location.href = `/board/view?id=${insertBoardContent.data}`
}
writeDataForm.addEventListener('submit', submitHandler)
