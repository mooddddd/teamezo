module.exports = (sequelize, Sequelize) => {
    class Chat extends Sequelize.Model {
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
                    },
                },
                { sequelize }
            );
        }
        static associate(model) {
            this.belongsTo(model.User, {
                foreignKey: "userid",
            });
        }
    }
    Chat.initialize();
};
