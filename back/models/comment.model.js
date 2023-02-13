module.exports = (sequelize, Sequelize) => {
    class Comment extends Sequelize.Model {
        static initialize() {
            return this.init(
                {
                    content: {
                        type: Sequelize.TEXT,
                        allowNull: false,
                    },
                    createAt: {
                        type: Sequelize.DATE,
                        defaultValue: sequelize.fn("now"),
                        allowNull: false,
                    },
                    class: {
                        type: Sequelize.BOOLEAN,
                        defaultValue: true,
                        allowNull: false,
                    },
                },
                { sequelize }
            );
        }
        static associate(model) {
            this.hasMany(model.Comment, {
                foreignKey: "groupNum",
                defaultValue: "id",
            });

            this.belongsTo(model.Comment, {
                foreignKey: "groupNum",
                defaultValue: "id",
            });

            this.belongsTo(model.Board, {
                foreignKey: "boardId",
            });

            this.belongsTo(model.User, {
                foreignKey: "userid",
            });

            this.hasMany(model.Point, {
                foreignKey: "commentId",
                sourceKey: "groupNum",
            });
        }
    }
    Comment.initialize();
};

// module.exports = (sequelize, Sequelize) => {
//     class Comment extends Sequelize.Model {
//         static initialize() {
//             return this.init({}, { sequelize });
//         }
//         static associate() {}
//     }
// };
