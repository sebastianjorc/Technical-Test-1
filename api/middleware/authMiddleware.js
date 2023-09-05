require('dotenv').config();
const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('./../errors/UnauthorizedError'); // Asegúrate de que la importación sea correcta

module.exports = (req, res, next) => {
  /*console.log('Request recibido:');
  console.log('Método:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', req.headers);
  console.log('Cuerpo (body):', req.body);
  console.log('Parámetros (params):', req.params);
  console.log('Query string:', req.query);*/

  const authHeader = req.header('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'MiddleWare: Acceso denegado. Token no proporcionado o en formato incorrecto.' });
  }

  // Extraer el token después de "Bearer "
  const token = authHeader.substring(7);
  //console.log(`\n\nToken: ${token}\n\n`);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;    
    // El token contiene información del usuario, como el ID
    req.userId = decoded.userId;

    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: 'MiddleWare: Token no válido.' });
    }
    // Otro manejo de errores si es necesario
    return next(error);
  }
};

exports.authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Acceso no autorizado. Token no proporcionado.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Reemplaza con tu secreto real

    // El token contiene información del usuario, como el ID
    req.userId = decoded.userId;

    next(); // Continúa con la solicitud
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido.' });
  }
};
