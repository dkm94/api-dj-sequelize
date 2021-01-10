const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Club extends Model {
    static associate(models) {
      Club.hasMany(models.Dj, {
        foreignKey: {
          name: 'clubId',
          allowNull: false
        }
      })
    }
  };

  Club.init({
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Club'
  });
  return Club;
};