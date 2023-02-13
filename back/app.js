const express = require('express')
const qs = require('qs')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const axios = require('axios')
const app = express()
const router = require('./routes')

app.use(express.urlencoded({ extended:false }))
app.use(express.json())
app.use(cookieParser())
app.use(
    cors({
        origin: true,
        credentials: true,
    })
)

app.use(router)

app.use((error, req, res, next) => {
    res.status(500).send(error.message)
})

module.exports = app
