const Seeds = require('../seeds/20200901155256-musicalGenres');
module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Musicalgenres', Seeds, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Musicalgenres', null, {});
  }
};
