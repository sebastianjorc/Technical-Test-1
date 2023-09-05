const { Sequelize } = require('sequelize');
require('dotenv').config(); // Cargar variables de entorno desde .env

try {
  const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mariadb',
  });

  module.exports = sequelize;
} catch (error) {
  console.error('Error al conectar con la base de datos:', error);
  process.exit(1); // Salir de la aplicación en caso de error de conexión
}
