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
    // Your code here
    return {};
  },

  addDj: async (data) => {
    const dj = await Dj.create(data);
    console.log("genre musicaux ****", data.musicalGenres);
    const allGenres = await Musicalgenre.findAll();
    console.log(allGenres);
    const musical_genres = data.musicalGenres;

    musical_genres.forEach(async (genre) => {
      console.log("***LOG1******",genre)
      allGenres.forEach(async (dbGenre) => {
        console.log("****LOG2****",dbGenre)
        if (dbGenre.dataValues.name === genre)
          await dj.addMusicalgenre(dbGenre);
          console.log("*********OK********")
      });
    });
  
    return dj;
  },

  updateDj: async (name, data) => {
    // Your code here
    return {};
  },

  deleteDj: async (name) => {
    // Your code here
    return {};
  },
};

module.exports = djsController;
