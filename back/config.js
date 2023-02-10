require('dotenv').config()
const config = {
    db: {
        development: {
            username: process.env.DB_USERNAME || 'root',
            password: process.env.DB_PASSWORD || 'tiajsrlf1!',
            host: process.env.DB_HOST || '127.0.0.1',
            port: process.env.DB_PORT || '3306',
            database: process.env.DATABASE || 'teamezo',
            dialect: 'mysql',
            define: {
                freezeTableName: true,
                timestamps: false,
            },
        },
    },
}

module.exports = config
