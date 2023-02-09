const config = {
    db: {
        development: {
            username: '',
            password: '',
            host: '127.0.0.1',
            port: '3306',
            database: 'teamezo',
            dialect: 'mysql',
            define: {
                freezeTableName: true,
                timestamps: false,
            },
        },
    },
}

module.exports = config
