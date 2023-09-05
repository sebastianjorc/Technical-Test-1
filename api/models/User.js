const { DataTypes } = require('sequelize');
const sequelize = require('./../config/config');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      isEmail: {
        msg: 'El campo debe ser una dirección de correo electrónico válida.',
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: {
        args: [8, 100],
        msg: 'La contraseña debe tener al menos 8 caracteres.',
      },
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
});

// Comparación de contraseña
User.prototype.comparePassword = async function (password) {
  //console.log(`\nREAL: ${this.password}\nLOGIN: ${password}\n`);
  return await bcrypt.compare(password, this.password);
};

module.exports = User;