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
    // Your code here
    return {};
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
