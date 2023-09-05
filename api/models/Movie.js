const { DataTypes } = require('sequelize');
const sequelize = require('./../config/config');
const User = require('./User');

const Movie = sequelize.define('Movie', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 255],
    },
  },
  director: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 255],
    },
  },
  releaseYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 1800,
      max: new Date().getFullYear(),
    },
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 100],
    },
  },
  addedBy: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      isInt: true,
    },
  },
  lastModifiedBy: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      isInt: true,
    },
  },
  
  lastModifiedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },

  removedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW, 
  },
}, {
  hooks: {
    // Hook que se ejecuta antes de actualizar una película
    beforeUpdate: (movie, options) => {
      if (movie.changed('title') || movie.changed('director') || movie.changed('releaseYear') || movie.changed('genre')) {
        // Actualiza lastModifiedAt solo si se modifican ciertos campos
        movie.lastModifiedAt = new Date();
      }
    },
    // Hook que se ejecuta antes de eliminar una película
    beforeDestroy: (movie, options) => {
      // Establece la fecha y hora actual en removedAt al eliminar
      movie.removedAt = new Date();
      // Actualiza lastModifiedAt al eliminar
      movie.lastModifiedAt = new Date();
    },
  }
});

Movie.belongsTo(User, { as: 'addedByUser', foreignKey: 'addedBy' });
Movie.belongsTo(User, { as: 'lastModifiedUser', foreignKey: 'lastModifiedBy' });

module.exports = Movie;