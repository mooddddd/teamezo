module.exports = (sequelize, Sequelize) => {
    class HashName extends Sequelize.Model {
        static initialize() {
            return this.init(
                {
                    tagName: {
                        type: Sequelize.STRING(255),
                        primaryKey: true,
                    },
                },
                { sequelize }
            );
        }
        static associate(model) {
            this.belongsToMany(model.Board, {
                through: "HashTag",
                foreignKey: "tagName",
            });
        }
    }
    HashName.initialize();
};
