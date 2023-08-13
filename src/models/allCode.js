'use strict';
const { Model } = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Allcodes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Allcodes.hasMany(models.User, { as: 'posionData', foreignKey: 'positionId' })
      Allcodes.hasMany(models.User, { as: 'genderData', foreignKey: 'gender' })
    }
  }
  Allcodes.init({
    keyMap: DataTypes.STRING,
    type: DataTypes.STRING,
    valueEn: DataTypes.STRING,
    valueVi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Allcodes',
  });
  return Allcodes;
};