'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Seed commands

    const date = new Date()

    await queryInterface.bulkInsert('Students', [{
      name: 'Charlie',
      grade: 12,
      gender: 'F', 
      createdAt: date,
      updatedAt: date,
    },{
      name: 'Mark',
      grade: 12,
      gender: 'M', 
      createdAt: date,
      updatedAt: date,
    }])
  },

  async down (queryInterface, Sequelize) {
    // Commands to revert seed
    await queryInterface.bulkDelete('Students', null, {})
  }
};
