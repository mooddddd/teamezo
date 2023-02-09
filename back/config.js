const config = {
    db: {
        development: {
            username: precess.env.USERNAME || '',
            password: precess.env.PASSWORD || '',
            host: precess.env.HOST || '',
            port: precess.env.PORT || '',
            database: precess.env.DATABASE || '',
            dialect: 'mysql',
            define: {
                freezeTableName: true,
                timestamps: false,
            },
        },
    },
}

module.exports = config
