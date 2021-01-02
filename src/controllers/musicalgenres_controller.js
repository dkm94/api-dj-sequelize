const { Musicalgenre } = require("../models");

const musicalGenresController = {
  getAllMusicalGenres: async () => {
    const musicalgenres = await Musicalgenre.findAll();
    return musicalgenres;
  },
};

module.exports = musicalGenresController;
