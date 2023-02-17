const axios = require("axios")

const request = axios.create({
    baseURL: "http://localhost:3000/search",
    withCredentials: true,
})

exports.getSearch = async (req, res) => {
    try {
        console.log(req.query)
        const result = await request.post("/", req.query)
        const { subject, content, hash } = result.data
        res.send(`${subject}`)
    } catch (error) {
        console.log(error)
    }
}

exports.postSearch = async (req, res) => {
    try {
        
        const result = await request.post("/", req.body)
        const { subject, content, hash } = result.data

        // if( subject.length ) {

            res.redirect(`/search?search=${req.body.search}`)
        // } else if( content.length ) {
// 
            // res.redirect(`/search?content=${content}`)
        // } else if( hash.length ) {
// 
            // res.redirect(`/search?hash=${hash}`)
        // } else {
            // res.redirect(`/search?hash=${req.body.search}`)
        // }

    } catch (error) {
        console.log(error)
    }
}