const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const UserMovieFavorite = sequelize.define('UserMovieFavorite', {
    markedAsFavoriteAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 1,
        max: 5,
      },
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  return UserMovieFavorite;
};
