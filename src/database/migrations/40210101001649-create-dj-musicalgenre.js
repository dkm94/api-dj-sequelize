module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DjMusicalgenres', {
      djId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Djs',
          key: 'id'
        },
        onDelete: "cascade"
      },
      musicalGenreId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Musicalgenres',
          key: 'id'
        },
        onDelete: "cascade"
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