const { Club } = require("../models");
const { NotFoundError, BadRequestError, ValidationError, UnauthorizedError, ForbiddenError } = require("../helpers/errors");

const clubsController = {
  getAllClubs: async () => {
    const clubs = await Club.findAll({
      order: [["name", "ASC"]],
      attributes: ["name"]
    });
    if(clubs.length == 0){
      throw new NotFoundError('Ressource introuvable.', 'Il n\'y a aucun club à afficher')
    }
    return clubs;
  },

  getClub: async (name) => {
    const club = await Club.findOne({
      where: {
        name: name
      }
    });
    if(!club){
      throw new NotFoundError('Le club que vous cherchez n\'existe pas.')
    }
    return club;
  },

  addClub: async (data) => {
    const {name} = data;
    const club = await Club.findOne({
      where: {
        name
      }
    })
    if(club){
      throw new BadRequestError('Ressource déjà existante.', 'Le club existe déjà.')
    }
    const newClub = await Club.create(data)
    return newClub;
  },
};

module.exports = clubsController;
