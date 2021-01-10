const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dj extends Model {
    static associate(models) {
      Dj.belongsTo(models.Club,
        {
          foreignKey: {
            name: 'clubId',
            allowNull: false
          }
        })
      Dj.belongsToMany(models.Musicalgenre, {
        through: 'DjMusicalgenres',
        foreignKey: {
          name: 'djId'
        }
      })
    }
  };
  
  Dj.init({
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    urlName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        len: [3, 50]
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        len: [3, 50]
      },
    },
    biography: DataTypes.STRING,
    soundcloud: DataTypes.STRING,
    facebook: DataTypes.STRING,
    instagram: DataTypes.STRING,
    spotify: DataTypes.STRING,
    beatport: DataTypes.STRING,
    mixcloud: DataTypes.STRING,
    youtube: DataTypes.STRING,
    clubId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Clubs',
        key: 'id'
      }
    }
  }
  , {
    sequelize,
    modelName: 'Dj'
  });
  return Dj;
};