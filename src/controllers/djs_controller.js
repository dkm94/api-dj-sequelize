const { pick } = require("lodash");
const { Dj, Musicalgenre, DjMusicalgenre, Club } = require("../models");
const { NotFoundError, BadRequestError } = require("../helpers/errors");

const djsController = {
  getAllDjs: async () => {
    const djs = await Dj.findAll({
      order: [["name", "ASC"]],
      attributes: ["name"],
      include: [{
        model: Club,
        attributes: ['name']
      }]
    });
    if(djs.length === 0){
      throw new NotFoundError("Ressource introuvable.", "La liste des Djs est vide.")
    }
    return djs;
  },

  getDj: async (name) => {
    const dj = await Dj.findOne({
      where: {
        name: name
      },
      include: [{
        model: Club,
        attributes: ['name']
      }],
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'clubId']
      }
    });
    if(!dj){
      throw new NotFoundError("Ressource introuvable.", "Le Dj que vous cherchez n'existe pas.")
    }
    return dj;
  },

  addDj: async (data) => {
    //1. Fonction qui créer le nouveau DJ
    const {name} = data;
    const djFound = await Dj.findOne({
      where: {
        name: name
      },
      attributes: ['id', 'name']
    })
    if(djFound){
      throw new BadRequestError('Ressource déjà existante.', 'Ce DJ existe déjà.')
    }
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
    const djFound = await Dj.findOne({
      where: {
        name: name
      }
    })
    if(!djFound){
      throw new NotFoundError("Ressource inexistante.", "Le Dj que vous souhaitez modifier n'existe pas.")
    }
    const dj = await Dj.update(data,
    {
      where: {
        name: name
      }
    });
    return dj;
  },

  deleteDj: async (name) => {
    const djFound = await Dj.findOne({
      where: {
        name: name
      }
    })
    if(!djFound){
      throw new NotFoundError("Ressource introuvable.", "Le Dj que vous souhaitez supprimer n'existe pas.")
    }
    const dj = await Dj.destroy({
      where: {
        name: name
      }
    });
    return dj;
  },
};

module.exports = djsController;
