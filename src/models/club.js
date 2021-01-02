const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Club extends Model {
    static associate(models) {
      Club.hasMany(models.Dj, {
        foreignKey: 'clubId'
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
        allowNull: false,
        unique: true,
        validate: {
          notNull: true,
          len: [10, 100]
        }
    }
  }, {
    sequelize,
    modelName: 'Club'
  });
  return Club;
};