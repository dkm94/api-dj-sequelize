const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DjMusicalgenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Dj.hasMany(models.Musicalgenre, {
        // as: 'djs',
        foreignKey: 'djId'
      })
      models.Musicalgenre.hasMany(models.Dj, {
        // as: 'musicalGenres',
        foreignKey: 'musicalGenreId'
      })
    }
  };
  DjMusicalgenre.init({
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    djId: DataTypes.INTEGER,
    musicalGenreId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DjMusicalgenre',
    createdAt,
    updatedAt
  });
  return DjMusicalgenre;
};