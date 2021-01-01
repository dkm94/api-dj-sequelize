const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dj extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dj.belongsTo(models.Club,
        {
          foreignKey: 'clubId'
        })
    }
  };
  Dj.init({
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    url_name: {
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
    biography: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        len: [500, 2000]
      },
    },
    soundcloud: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        len: [10, 100]
      },
    },
    facebook: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        len: [10, 100]
      },
    },
    instagram: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        len: [10, 100]
      },
    },
    spotify: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        len: [10, 100]
      },
    },
    beatport: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        len: [10, 100]
      },
    },
    mixcloud: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        len: [10, 100]
      },
    },
    youtube: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        len: [10, 100]
      },
    },
    clubId: {
      type: DataTypes.INTEGER,
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