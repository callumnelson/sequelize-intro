'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Add column:
    await queryInterface.addColumn('Students', 'gender', {type: Sequelize.STRING})
  },

  async down (queryInterface, Sequelize) {
    // Remove column:
    await queryInterface.removeColumn('Students', 'gender')
  }
};
