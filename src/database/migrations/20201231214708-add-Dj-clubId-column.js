module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.addColumn('Dj', 'clubId', { 
      type: Sequelize.INTEGER,
      references: {
        model: 'Club',
        key: 'id'
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('addDjColumn');
  }
};
