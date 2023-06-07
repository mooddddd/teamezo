module.exports = (sequelize, Sequelize) => {
    class Qna extends Sequelize.Model {
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
                    password: {
                        type: Sequelize.STRING(255),
                        allowNull: true,
                    },
                    createAt: {
                        type: Sequelize.DATE,
                        defaultValue: sequelize.fn('now'),
                    },
                },
                { sequelize }
            )
        }
        static associate(model) {
            this.belongsTo(model.User, {
                foreignKey: 'userid',
            })
        }
    }
    Qna.initialize()
}
