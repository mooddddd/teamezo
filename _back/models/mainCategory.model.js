module.exports = (sequelize, Sequelize) => {
    class MainCategory extends Sequelize.Model {
        static initialize() {
            return this.init(
                {
                    mainName: {
                        type: Sequelize.STRING(255),
                        primaryKey: true,
                    },
                },
                { sequelize }
            );
        }
        static associate(model) {
            this.hasMany(model.Board, {
                foreignKey: "mainName",
            });
            this.hasMany(model.SubCategory, {
                foreignKey: "mainName",
            });
        }
    }
    MainCategory.initialize();
};
