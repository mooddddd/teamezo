module.exports = (sequelize, Sequelize) => {
    class SubCategory extends Sequelize.Model {
        static initialize() {
            return this.init(
                {
                    subName: {
                        type: Sequelize.STRING(255),
                        primaryKey: true,
                    },
                },
                { sequelize }
            );
        }
        static associate(model) {
            this.belongsTo(model.MainCategory, {
                foreignKey: "mainName",
            });

            this.hasMany(model.Board, {
                foreignKey: "subName",
            });
        }
    }
    SubCategory.initialize();
};
