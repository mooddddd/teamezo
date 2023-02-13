exports.getAdmin = (req, res, next) => {
    try {
        res.render("admin/admin.html")
    } catch (error) {
        
    }
}


// 회원정보 불러오기 : get 요청으로 전체 회원정보 불러오기
    // paging 기능 추가
    // 

// 특정회원 검색기능 : form 태그로 이루어졌다.
    // 1. 유저의 정보를 받는다.
    // 2. 해당 정보를 가지고 백서버로가서, 비교(일부)를 한다.
    // 3. 같은 값을 가지고와서 정보를 뿌린다.

exports.getAdminUser = async (req, res, next) => {
    try {
        // const result = await axios.get("http://localhost:3000/admin/user")
        const result = {
            id: '강찬수',
            name: '강찬수',
            nickname: 'char1ey',
            gender: '남성',
            phone: "010-1234-1234",
            email: 'ckstn410@naver.com',
            point: 1500,
        }
        res.render("admin/adminUser.html", { result })
    } catch (error) {
        
    }
}

exports.postAdminUser = async (req, res, next) => {
    try {
        // const user = req.body.search
        // axios.post("http://localhost:3005/admin/user")
        // res.redirect(`/admin/user?${req.body.search}`)
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