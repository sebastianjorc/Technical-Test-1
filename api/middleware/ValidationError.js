// errors/ValidationError.js
class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = 'ValidationError';
      this.statusCode = 422; // Código HTTP para "Unprocessable Entity"
    }
  }
  
  module.exports = ValidationError;
  