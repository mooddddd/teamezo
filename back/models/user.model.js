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

                    avatarUrl: {
                        type: Sequelize.STRING(255),
                        allownull: true,
                    },

                    gender: {
                        type: Sequelize.CHAR(4),
                        defaultValue: "남자",
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
                        type: Sequelize.ENUM("local", "kakao"),
                        allowNull: false,
                        defaultValue: "local",
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
            );
        }
        static associate(model) {
            this.hasMany(model.Board, {
                foreignKey: "userid",
            });
            this.hasMany(model.Chat, {
                foreignKey: "userid",
            });
            this.hasMany(model.Qna, {
                foreignKey: "userid",
            });
            this.hasMany(model.Point, {
                foreignKey: "userid",
            });
            this.hasMany(model.Comment, {
                foreignKey: "userid",
            });
            this.hasMany(model.Liked, {
                foreignKey: "userid",
            });
        }
    }
    User.initialize();
};
