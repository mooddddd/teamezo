exports.getAdmin = (req, res, next) => {
    try {
        res.render("admin/admin.html")
    } catch (error) {
        
    }
}

exports.getAdminUser = (req, res, next) => {
    try {
        res.render("admin/adminUser.html")
    } catch (error) {
        
    }
}

exports.getAdminUserEdit = (req, res, next) => {
    try {
        res.render("admin/adminUserEdit.html")
    } catch (error) {
        
    }
}

exports.postAdminUserEdit = (req, res, next) => {
    try {
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

exports.getAdminBoard = (req, res, next) => {
    try {
        res.render("admin/adminBoard.html")
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
