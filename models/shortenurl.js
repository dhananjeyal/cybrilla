'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShortenURL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ShortenURL.init({
    urlCode: DataTypes.STRING,
    longUrl: DataTypes.STRING,
    shortUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ShortenURL',
  });
  return ShortenURL;
};