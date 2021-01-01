module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Djs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      urlName: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      biography: {
        type: Sequelize.STRING(2000),
        allowNull: false
      },
      soundcloud: {
        type: Sequelize.STRING(1000),
        allowNull: true
      },
      facebook: {
        type: Sequelize.STRING(1000),
        allowNull: true
      },
      instagram: {
        type: Sequelize.STRING(1000),
        allowNull: true
      },
      spotify: {
        type: Sequelize.STRING(1000),
        allowNull: true
      },
      beatport: {
        type: Sequelize.STRING(1000),
        allowNull: true
      },
      mixcloud: {
        type: Sequelize.STRING(1000),
        allowNull: true
      },
      youtube: {
        type: Sequelize.STRING(1000),
        allowNull: true
      },
      clubId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Clubs',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Djs');
  }
};