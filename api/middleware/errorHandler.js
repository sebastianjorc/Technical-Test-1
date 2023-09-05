module.exports = (err, req, res, next) => {
    console.error(err.stack);
  
    if (err.name === 'UnauthorizedError') {
      return res.status(401).json({ message: 'Acceso no autorizado.' });
    }
  
    res.status(500).json({ message: 'Error en el servidor.' });
};
  

  /**
   // middleware/errorHandler.js
module.exports = (err, req, res, next) => {
  console.error(err.stack); // Registra el error en la consola

  // Respuesta de error coherente
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ error: err.message });
};

   */