const { pick } = require("lodash");
// const { Dj } = require('../models'); 
const { Dj, Musicalgenre, DjMusicalgenre } = require("../models");
const { NotFoundError } = require("../helpers/errors");

const djsController = {
  getAllDjs: async () => {
    const djs = await Dj.findAll();
    console.log(djs)
    return djs;
  },

  getDj: async (name) => {
    const dj = await Dj.findOne({
      where: {name}
    });
    return dj;
  },

  addDj: async (data) => {
    //1. Fonction qui créer le nouveau DJ
    const dj = await Dj.create(data);
    console.log("genre musicaux", data.musicalGenres);
    //2. On récupère tous les genres de la DB
    const allGenres = await Musicalgenre.findAll();
    //3. On récupère tous les genres du DJ
    const musical_genres = data.musicalGenres;

    //4. On boucle pour récuperer chaque genre du DJ
    musical_genres.forEach(async (genre) => {
      console.log(genre)
      //5. On boucle pour révupérer chaque genre de la DB
      allGenres.forEach(async (dbGenre) => {
        console.log(dbGenre)
        //6. On fait la comparaison entre  "genres DJ" et "genres DB",
        // si les datas de la DB correspondent à ceux renseignés par le DJ,
        //on ajoute au DJ ses nouveaux genre (ils apparaîtront dans la table de liaison)
        if (dbGenre.dataValues.name === genre)
          await dj.addMusicalgenre(dbGenre);
      });
    });
  
    return dj;
  },

  updateDj: async (name, data) => {
    const djUpdated = await Dj.update(data,
    {
      where: {name}
    });
    return djUpdated;
  },

  deleteDj: async (name) => {
    const deletedDj = Dj.destroy({
      where: {name}
    });
    return deletedDj;
  },
};

module.exports = djsController;
