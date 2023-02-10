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
                foreignKey: "group",
            });
            this.belongsTo(model.Comment, {
                foreignKey: "group",
            });

            this.belongsTo(model.Board, {
                foreignKey: "boardId",
            });

            this.hasMany(model.Point, {
                foreignKey: "commentId",
                sourceKey: "group",
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