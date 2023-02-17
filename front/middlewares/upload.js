const multer = require('multer')
const path = require('path')

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, done) => {
            done(null, "public/uploads/")
        },
        
        filename: (req, file, done) => {

            const ext = path.extname(file.originalname)
            // const basename = path.basename(file.originalname, ext)
            const filename = `${Date.now()}${ext}`
            done(null, filename)
        }
    }),
    
    limits: { fileSize: 5 * 1024 * 1024 },
})

module.exports = upload