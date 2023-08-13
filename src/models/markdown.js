'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Markdown extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Allcode.hasMany(models.User, { as: 'department', foreignKey: 'positionId' })
      //Allcode.hasMany(models.User, { as: 'gender', foreignKey: 'gender' })
      Markdown.belongsTo(models.User, { foreignKey: 'doctorId' })
    }
  }
  Markdown.init({
    contentHTML: DataTypes.TEXT,
    contentMarkdown: DataTypes.TEXT,
    description: DataTypes.TEXT,
    doctorId: DataTypes.INTEGER,
    specialtyId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Markdown',
  });
  return Markdown;
};