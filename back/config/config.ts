import dotenv from "dotenv"
dotenv.config()

export const config = {
    protocol: process.env.BACK_PROTOCOL || "http",
    host: process.env.BACK_HOST || 'localhost',
    port: process.env.BACK_PORT || 3005,
    db: {
        development: {
            username: process.env.DB_USER || "",
            password: process.env.DB_PASSWORD || "",
            database: process.env.DB_DATABASE || "",
            host: process.env.DB_HOST || "localhost",
            port: process.env.DB_PORT || 3306,
            dialect: "mysql",
            timezone: "Asia/Seoul",
            dialectOptions: {
                dataStrings: true,
                typeCast: true,
            },
            define: { freezeTableName: true, timestamp: false },
        }
    }
}