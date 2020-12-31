module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Djs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        default: Sequelize.fn('uuid_generate_v4')
      },
      url_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      biography: {
        type: Sequelize.STRING(2000),
        allowNull: false
      },
      soundcloud: {
        type: Sequelize.STRING(1000)
      },
      facebook: {
        type: Sequelize.STRING(1000)
      },
      instagram: {
        type: Sequelize.STRING(1000)
      },
      spotify: {
        type: Sequelize.STRING(1000)
      },
      beatport: {
        type: Sequelize.STRING(1000)
      },
      mixcloud: {
        type: Sequelize.STRING(1000)
      },
      youtube: {
        type: Sequelize.STRING(1000)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Djs');
  }
};