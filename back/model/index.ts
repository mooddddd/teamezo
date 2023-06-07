import { Sequelize } from 'sequelize-typescript';
import { config } from "../config";
import path from 'path';

const db = config.db.development
const sequelize: Sequelize = new Sequelize({
    host: db.host,
    username: db.username,
    password: db.password,
    database: db.database,
    dialect: 'mysql',
    models: [path.join(__dirname, '*.model.ts')],
});

export default sequelize;