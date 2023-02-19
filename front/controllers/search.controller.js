const axios = require("axios")

const request = axios.create({
    baseURL: "http://localhost:3000/search",
    withCredentials: true,
})

exports.getSearch = async (req, res, next) => {
    try {
        if( req.query.search ) {
            const result = await request.post("/", req.query)
            const { subject, content, mainName, subName, hash, startNumber, endNumber, totalPage } = result.data
            const btnNumber = []
            for(let i = startNumber; i <= endNumber; i++){
                btnNumber.push(i)
            }
            res.render('search/searchList.html', { subject, content, mainName, subName, hash, startNumber, endNumber, totalPage })
        } else if ( req.query.category ){
            const result = await request.post("/", req.query)
            const { subject, content, mainName, subName, hash, startNumber, endNumber, totalPage } = result.data
            const btnNumber = []
            for(let i = startNumber; i <= endNumber; i++){
                btnNumber.push(i)
            }
            res.render('search/searchList.html', { subject, content, mainName, subName, hash, startNumber, endNumber, totalPage })
        } else if ( req. query.tagName ){
            const result = await request.post("/", req.query)
            const { subject, content, mainName, subName, hash, startNumber, endNumber, totalPage } = result.data
            const btnNumber = []
            for(let i = startNumber; i <= endNumber; i++){
                btnNumber.push(i)
            }
            res.render('search/searchList.html', { subject, content, mainName, subName, hash, startNumber, endNumber, totalPage })
        } else {
            res.render('error.html')
        }
    } catch (error) {
        next(error)
    }
}

exports.postSearch = async (req, res, next) => {
    try {
        const result = await request.post("/", req.body)
        const { subject, content, hash } = result.data
        res.redirect(`/search?search=${req.body.search}`)
    } catch (error) {
        next(error)
    }
}