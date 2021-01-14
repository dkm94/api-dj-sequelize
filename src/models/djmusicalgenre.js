const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DjMusicalgenre extends Model {
    static associate(models) {
      DjMusicalgenre.belongsTo(models.Dj, {
        foreignKey: 'djId'
      })
      DjMusicalgenre.belongsTo(models.Musicalgenre, {
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
    djId: {
      type: DataTypes.INTEGER,
      onDelete: 'cascade'
    },
    musicalGenreId: {
      type: DataTypes.INTEGER,
      onDelete: 'cascade'
    }
  }, {
    sequelize,
    modelName: 'DjMusicalgenre'
  });
  return DjMusicalgenre;
};