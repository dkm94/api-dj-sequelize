const { Club } = require("../models");

const clubsController = {
  getAllClubs: async () => {
    const clubs = await Club.findAll();
    return clubs;
  },
  getClub: async (name) => {
    // Your code here
    return {};
  },
  addClub: async (data) => {
    // Your code here
    return {};
  },
};

module.exports = clubsController;
