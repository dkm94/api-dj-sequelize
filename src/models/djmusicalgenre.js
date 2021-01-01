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
      DjMusicalgenre.belongsTo(models.Dj, {
        as: 'dj',
        foreignKey: 'djId'
      })
      DjMusicalgenre.belongsTo(models.Musicalgenre, {
        as: 'musicalGenre',
        foreignKey: 'musicalGenreId'
      })
    }
  };
  DjMusicalgenre.init({
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        notNull: true,
        isUUID: 4
      },
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