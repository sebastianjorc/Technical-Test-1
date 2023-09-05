const Movie = require('../models/Movie');

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor.' });
  }
};

exports.createMovie = async (req, res) => {
  try {
    const { title, director, releaseYear, genre } = req.body;
    
    // Puedes acceder al ID del usuario desde req.userId, que se estableció en el middleware
    const addedBy = req.userId;

    const newMovie = await Movie.create({
      title,
      director,
      releaseYear,
      genre,
      addedBy,
    });
    
    res.status(201).json(newMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor.' });
  }
};

exports.getMovieById = async (req, res) => {
  try {
    const movieId = req.params.id;
    const movie = await Movie.findByPk(movieId);

    if (!movie) {
      return res.status(404).json({ message: 'Película no encontrada.' });
    }

    res.status(200).json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor.' });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, director, releaseYear, genre } = req.body;
    const movie = await Movie.findByPk(id);
    if (!movie) {
      return res.status(404).json({ message: 'Película no encontrada.' });
    }
    await movie.update({ title, director, releaseYear, genre });
    res.status(200).json({ message: 'Película actualizada exitosamente.', movie });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor.' });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByPk(id);
    if (!movie) {
      return res.status(404).json({ message: 'Película no encontrada.' });
    }
    await movie.destroy();
    res.status(200).json({ message: 'Película eliminada exitosamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor.' });
  }
};

exports.getFilteredMovies = async (req, res) => {
  try {
    const { title, director, releaseYear, genre } = req.query;
    const whereConditions = {};

    if (title) {
      whereConditions.title = title;
    }

    if (director) {
      whereConditions.director = director;
    }

    if (releaseYear) {
      whereConditions.releaseYear = releaseYear;
    }

    if (genre) {
      whereConditions.genre = genre;
    }

    const movies = await Movie.findAll({
      where: whereConditions,
    });

    if (movies.length === 0) {
      return res.status(404).json({ message: 'No se encontraron películas para los filtros especificados.' });
    }

    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor.' });
  }
};
