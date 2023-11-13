'use strict';

const { NOW } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Penduduks', [
      {
        name: 'Nandy',
        birthplace: 'Bandung',
        date_of_birth: '1995-09-17',
        identity_number: 123456789,
        gender: 'Laki-laki',
        address: 'Jl. Cempaka Putih No. 10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nandy',
        birthplace: 'Bandung',
        date_of_birth: '1995-09-17',
        identity_number: 123456789,
        gender: 'Laki-laki',
        address: 'Jl. Cempaka Putih No. 10',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
