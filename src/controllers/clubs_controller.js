const { Club } = require("../models");

const clubsController = {
  getAllClubs: async () => {
    const clubs = await Club.findAll();
    return clubs;
  },
  getClub: async (name) => {
    const club = await Club.findOne({
      where: {name}
    });
    console.log(club)
    return club;
  },
  addClub: async (data) => {
    const newClub = await Club.create(data)
    console.log(newClub);
    return newClub;
  },
};

module.exports = clubsController;
