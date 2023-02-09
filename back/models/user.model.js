module.exports = (sequelize, Sequelize) => {
    class User extends Sequelize.Model {
        static initialize() {
            return this.init(
                {
                    userid: {
                        type: Sequelize.STRING(60),
                        primaryKey: true,
                    },
                    userpw: {
                        type: Sequelize.STRING(64),
                        allowNull: false,
                    },
                    username: {
                        type: Sequelize.STRING(30),
                        allowNull: false,
                    },
                    nickname: {
                        type: Sequelize.STRING(30),
                        allowNull: false,
                    },
                    address: {
                        type: Sequelize.STRING(64),
                        allowNull: false,
                    },
                    gender: {
                        type: Sequelize.STRING(4),
                        defaultValue: '남자',
                    },
                    phone: {
                        type: Sequelize.STRING(20),
                        allowNull: false,
                    }, //admin
                    email: {
                        type: Sequelize.STRING(30),
                        allowNull: false,
                    },
                    provider: {
                        type: Sequelize.ENUM('local', 'kakao'),
                        allowNull: false,
                        defaultValue: 'local',
                    },
                    introduce: {
                        type: Sequelize.TEXT(),
                        allowNull: true,
                    },
                    admin: {
                        type: Sequelize.BOOLEAN,
                        defaultValue: 0,
                    },
                },
                { sequelize }
            )
        }
    }
    User.initialize()
}
