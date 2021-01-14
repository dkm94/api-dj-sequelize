const { Musicalgenre } = require("../models");
const { NotFoundError } = require("../helpers/errors");

const musicalGenresController = {
  getAllMusicalGenres: async () => {
    const musicalgenres = await Musicalgenre.findAll();
    if(musicalgenres == 0){
      throw new NotFoundError("Ressources inexistantes.", "Il n'y a aucun genre musical à afficher.")
    }
    return musicalgenres;
  },
};

module.exports = musicalGenresController;
