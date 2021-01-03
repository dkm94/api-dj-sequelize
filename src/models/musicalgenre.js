const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Musicalgenre extends Model {
    static associate(models) {
      Musicalgenre.belongsToMany(models.Dj, {
        through: 'DjMusicalgenres',
        foreignKey: 'musicalGenreId'
      })
    }
  };

  Musicalgenre.init({
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      // defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Musicalgenre'
  });
  return Musicalgenre;
};