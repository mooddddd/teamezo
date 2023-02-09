const express = require('express')
const app = express()
const router = require('./routes')
const qs = require('qs')
const cors = require('cors')

const cookieParser = require('cookie-parser')
const axios = require('axios')

app.use(express.json())
app.use(
    cors({
        origin: true,
        credentials: true,
    })
)
app.use(cookieParser())
app.use(router)

app.use((error, req, res, next) => {
    res.status(500).send(error.message)
})

module.exports = app
