module.exports = (sequelize, Sequelize) => {
    class File extends Sequelize.Model {
        static initialize() {
            return this.init(
                {
                    fileUrl: {
                        type: Sequelize.STRING(255),
                        allownull: false,
                    },
                },
                { sequelize }
            );
        }
        static associate(model) {
            this.belongsTo(model.Board, {
                foreignKey: "boardId",
            });

            this.hasMany(model.Board, {
                foreignKey: "fileId",
            });
        }
    }
    File.initialize();
};
