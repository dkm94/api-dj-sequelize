module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DjMusicalgenres', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        default: Sequelize.fn('uuid_generate_v4')
      },
      djId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Djs',
          key: 'id'
        }
      },
      musicalGenreId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'MusicalGenres',
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
    await queryInterface.dropTable('DjMusicalgenres');
  }
};