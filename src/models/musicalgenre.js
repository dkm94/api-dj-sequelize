const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Musicalgenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Musicalgenre.hasOne(models.DjMusicalgenre)
    }
  };
  Musicalgenre.init({
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
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Musicalgenre',
    createdAt,
    updatedAt
  });
  return Musicalgenre;
};