'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
  
    await queryInterface.createTable('Markdown', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contentHTML: {
        type: Sequelize.TEXT
      },
      contentMarkdown: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      doctorId: {
        type: Sequelize.INTEGER
      },
      specialtyId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Markdown');
  }
};