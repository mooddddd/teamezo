const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const cookieParser = require('cookie-parser')
const router = require('./routes')

app.set('view engine', 'html')
nunjucks.configure('views', { express: app })
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(router)

module.exports = app
