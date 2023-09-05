'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const movies = [
      {
        title: 'Pelicula 1',
        director: 'Director 1',
        releaseYear: 2020,
        genre: 'Género 1',
        addedBy: 1, // ID del usuario que la agregó
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pelicula 2',
        director: 'Director 2',
        releaseYear: 2019,
        genre: 'Género 2',
        addedBy: 1, // ID del usuario que la agregó
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pelicula 3',
        director: 'Director 3',
        releaseYear: 2022,
        genre: 'Género 3',
        addedBy: 2, // ID del usuario que la agregó
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más películas según sea necesario
      {
        title: 'Pelicula 4',
        director: 'Director 4',
        releaseYear: 2018,
        genre: 'Género 4',
        addedBy: 2, // ID del usuario que la agregó
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pelicula 5',
        director: 'Director 5',
        releaseYear: 2021,
        genre: 'Género 5',
        addedBy: 1, // ID del usuario que la agregó
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pelicula 6',
        director: 'Director 6',
        releaseYear: 2017,
        genre: 'Género 6',
        addedBy: 3, // ID del usuario que la agregó
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pelicula 7',
        director: 'Director 7',
        releaseYear: 2019,
        genre: 'Género 7',
        addedBy: 4, // ID del usuario que la agregó
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pelicula 8',
        director: 'Director 8',
        releaseYear: 2020,
        genre: 'Género 8',
        addedBy: 3, // ID del usuario que la agregó
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pelicula 9',
        director: 'Director 9',
        releaseYear: 2016,
        genre: 'Género 9',
        addedBy: 5, // ID del usuario que la agregó
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pelicula 10',
        director: 'Director 10',
        releaseYear: 2015,
        genre: 'Género 10',
        addedBy: 4, // ID del usuario que la agregó
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pelicula 11',
        director: 'Director 11',
        releaseYear: 2018,
        genre: 'Género 11',
        addedBy: 2, // ID del usuario que la agregó
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pelicula 12',
        director: 'Director 12',
        releaseYear: 2017,
        genre: 'Género 12',
        addedBy: 1, // ID del usuario que la agregó
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pelicula 13',
        director: 'Director 13',
        releaseYear: 2020,
        genre: 'Género 13',
        addedBy: 3, // ID del usuario que la agregó
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pelicula 14',
        director: 'Director 14',
        releaseYear: 2019,
        genre: 'Género 14',
        addedBy: 5, // ID del usuario que la agregó
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pelicula 15',
        director: 'Director 15',
        releaseYear: 2016,
        genre: 'Género 15',
        addedBy: 2, // ID del usuario que la agregó
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pelicula 16',
        director: 'Director 16',
        releaseYear: 2021,
        genre: 'Género 16',
        addedBy: 1, // ID del usuario que la agregó
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pelicula 17',
        director: 'Director 17',
        releaseYear: 2017,
        genre: 'Género 17',
        addedBy: 4, // ID del usuario que la agregó
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pelicula 18',
        director: 'Director 18',
        releaseYear: 2018,
        genre: 'Género 18',
        addedBy: 5, // ID del usuario que la agregó
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pelicula 19',
        director: 'Director 19',
        releaseYear: 2019,
        genre: 'Género 19',
        addedBy: 3, // ID del usuario que la agregó
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pelicula 20',
        director: 'Director 20',
        releaseYear: 2020,
        genre: 'Género 20',
        addedBy: 2, // ID del usuario que la agregó
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return queryInterface.bulkInsert('Movies', movies, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {});
  },
};
