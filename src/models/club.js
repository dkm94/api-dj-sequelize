const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Club extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Club.hasMany(models.Dj, {
        foreignKey: 'clubId',
        as: 'dj'
      })

    }
  };
  Club.init({
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        notNull: true,
        isUUID: 4
      }
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
    modelName: 'Club',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Club;
};