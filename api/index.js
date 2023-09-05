require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const movieRoutes = require('./routes/movies');
const errorHandler = require('./middleware/errorHandler');
const sequelize = require('./config/config'); // Importa la configuración de Sequelize

app.use(cors());
app.use(bodyParser.json());

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Middleware de autenticación JWT (debes implementar esto)
app.use(require('./middleware/authMiddleware'));

// Rutas de gestión de películas
app.use('/api/movies', movieRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Sincroniza los modelos con la base de datos antes de escuchar en el puerto
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar modelos con la base de datos:', error);
  });
