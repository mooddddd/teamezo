module.exports = (sequelize, Sequelize) => {
    class Board extends Sequelize.Model {
        static initialize() {
            return this.init(
                {
                    subject: {
                        type: Sequelize.STRING(255),
                        allowNull: false,
                    },
                    content: {
                        type: Sequelize.TEXT,
                        allowNull: false,
                    },
                    hit: {
                        type: Sequelize.INTEGER,
                        defaultValue: 0,
                    },
                    visible: {
                        type: Sequelize.BOOLEAN,
                        defaultValue: true,
                    },
                    notice: {
                        type: Sequelize.BOOLEAN,
                        defaultValue: false,
                    },
                    createAt: {
                        type: Sequelize.DATE,
                        defaultValue: sequelize.fn("now"),
                    },
                },
                { sequelize }
            );
        }
        static associate(model) {
            this.belongsTo(model.User, {
                foreignKey: "userid",
            });

            this.hasMany(model.Comment, {
                foreignKey: "boardId",
            });
            this.hasMany(model.File, {
                foreignKey: "boardId",
            });
            this.hasMany(model.Point, {
                foreignKey: "boardId",
            });

            this.hasMany(model.Liked, {
                foreignKey: "boardId",
            });

            this.belongsToMany(model.HashName, {
                through: "HashTag",
                foreignKey: "boardId",
            });

            this.belongsTo(model.File, {
                foreignKey: "fileId",
            }); 

            this.belongsTo(model.MainCategory, {
                foreignKey: "mainName",
            });

            this.belongsTo(model.SubCategory, {
                foreignKey: "subName",
            });
        }
    }
    Board.initialize();
};
