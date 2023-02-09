const app = require('./app')
const { sequelize } = require('./models')
const port = process.env.PORT || 3000

app.listen(3000, () => {
    console.log(`Running on http://localhost:${port}`)
})
