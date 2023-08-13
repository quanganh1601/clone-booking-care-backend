'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      password: '123456',
      email: 'admin@gmail.com',
      firstName: 'demo',
      lastName: "eric",
      address: "hanoi",
      gender: 1,
      roleId: "ROLE",
      phoneNumber: "09090000",
      positionId: "R1",
      image: "kkkkkkk",
      createdAt: new Date(),
      updatedAt: new Date
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.cr
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     * roleId: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    positionId: DataTypes.STRING,
    image: DataTypes.STRING
     */
  }
};
