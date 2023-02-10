module.exports = (sequelize, Sequelize) => {
    class Point extends Sequelize.Model {
        static initialize() {
            return this.init(
                {
                    point: {
                        type: Sequelize.ENUM("board", "comment", "liked"),
                    },
                },
                { sequelize }
            );
        }
        static associate(model) {
            this.belongsTo(model.User, {
                foreignKey: "userid",
            });

            this.belongsTo(model.Board, {
                foreignKey: "boardId",
            });

            this.belongsTo(model.Comment, {
                foreignKey: "commentId",
                targetKey: "group",
            });

            this.belongsTo(model.Liked, {
                foreignKey: "likedId",
            });
        }
    }
    Point.initialize();
};
