module.exports = (sequelize, Sequelize) => {
    class Liked extends Sequelize.Model {
        static initialize() {
            return this.init({}, { sequelize });
        }
        static associate(model) {
            this.belongsTo(model.Board, {
                foreignKey: "boardId",
            });
            this.belongsTo(model.User, {
                foreignKey: "userid",
            });

            this.hasMany(model.Point, {
                foreignKey: "likedId",
            });
        }
    }
    Liked.initialize();
};
