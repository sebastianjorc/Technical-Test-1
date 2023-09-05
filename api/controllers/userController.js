/*
const User = require('./../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validar que el usuario y la contraseña no estén vacíos
    if (!username || !password) {
      return res.status(400).json({ message: 'El usuario y la contraseña son obligatorios.' });
    }

    // Validar la contraseña (por ejemplo, longitud mínima de 8 caracteres)
    if (password.length < 8) {
      return res.status(400).json({ message: 'La contraseña debe tener al menos 8 caracteres.' });
    }

    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya está registrado.' });
    }

    const saltRounds = 12; // Ajustar según tus necesidades de seguridad
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      username,
      password: hashedPassword,
    });

    const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ token });
  } catch (error) {
    console.error(error);

    // Manejar errores específicos
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ message: 'Error de validación de datos.' });
    }

    res.status(500).json({ message: 'Error en el servidor.' });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas. Usuario no encontrado' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas. Password no corresponde' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor.' });
  }
};*/