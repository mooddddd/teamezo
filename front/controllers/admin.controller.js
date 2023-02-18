const axios = require("axios")

const request = axios.create({
    baseURL: "http://localhost:3000/admin",
    withCredentials: true,
})

exports.getAdmin = (req, res, next) => {
    try {
        const { token } = req.cookies
        if( token !== "admin" ){
            res.render("error.html")
        } else {
            res.render("admin/admin.html", { token })
        }
    } catch (error) {
        
    }
}

exports.getAdminUser = async (req, res, next) => {
    try {
        if( req.query.search ){
            const userid = req.query.search
            const response = await request.post(`/user`, { userid })
            const userList = []
            userList[0] = response.data
            res.render("admin/adminUser.html", { userList })
        } else {
            const response = await request.get(`/user?page=${req.query.page}`)
            const { userList, startNumber, endNumber, totalPage } = response.data
            const btnNumber = []
            for(let i = startNumber; i <= endNumber; i++){
                btnNumber.push(i)
            }
    
            res.render("admin/adminUser.html", { userList, btnNumber, totalPage })
        }
    } catch (error) {
        
    }
}

exports.postAdminUser = async (req, res, next) => {
    try {
        const userid = req.body.search
        res.redirect(`/admin/user?search=${userid}`)
    } catch (error) {
        
    }
}

exports.getAdminUserEdit = async (req, res, next) => {
    try {
        const response = await request.get(`/userEdit?userid=${req.query.userid}`)
        const user = response.data
        res.render("admin/adminUserEdit.html", { user })
    } catch (error) {
        
    }
}

exports.postAdminUserEdit = async (req, res, next) => {
    try {
        const { path } = req.file
        const { body } = req
        await request.post('/userEdit', { path, body })
        res.redirect('/admin/user')
    } catch (error) {
        
    }
}

exports.getAdminCategory = (req, res, next) => {
    try {
        res.render("admin/adminCategory.html")
    } catch (error) {
        
    }
}

exports.postAdminCategory = (req, res, next) => {
    try {
        res.redirect('/admin/category')
    } catch (error) {
        
    }
}

exports.getAdminBoard = async (req, res, next) => {
    try {
        console.log(req.query)
        const { page, order } = req.query
        const response = await request.get(`/board?page=${Number(page)}&order=${order}`)
        const { boardList, startNumber, endNumber, totalPage } = response.data
        const btnNumber = []
        for(let i = startNumber; i <= endNumber; i++){
            btnNumber.push(i)
        }
        res.render("admin/adminBoard.html", { boardList, btnNumber, totalPage })
    } catch (error) {
        
    }
}

exports.postAdminBoard = (req, res, next) => {
    try {
        res.redirect('/admin/board')
    } catch (error) {
        
    }
}

exports.getAdminStats = (req, res, next) => {
    try {
        res.render("admin/adminStats.html")
    } catch (error) {
        
    }
}