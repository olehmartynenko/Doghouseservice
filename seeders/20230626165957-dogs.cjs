'use strict'

const dogs = [
  {
    name: 'Bingo',
    color: 'brown',
    tail_length: 30,
    weight: 20,
  },
  {
    name: 'Batman',
    color: 'black',
    tail_length: 10,
    weight: 50,
  },
  {
    name: 'Robin',
    color: 'white',
    tail_length: 20,
    weight: 30,
  },
  {
    name: 'Superman',
    color: 'blue',
    tail_length: 15,
    weight: 60,
  },
  {
    name: 'Tyson',
    color: 'brown',
    tail_length: 25,
    weight: 70,
  },
  {
    name: 'Hulk',
    color: 'green',
    tail_length: 35,
    weight: 80,
  },
  {
    name: 'Thor',
    color: 'blue',
    tail_length: 45,
    weight: 90,
  },
  {
    name: 'Neo',
    color: 'red&amber',
    tail_length: 22,
    weight: 32,
  },
  {
    name: 'Jessy',
    color: 'black&white',
    tail_length: 7,
    weight: 14,
  },
]

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('dogs', dogs, {})
  },

  async down(queryInterface, Sequelize) {},
}
