import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const isEmailValid = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isPasswordValid = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signup, isAuthenticated, authError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/dashboard');
  }, [isAuthenticated]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      setError('Por favor, ingresa el usuario y la contraseña.');
      return;
    }

    if (!isEmailValid(username)) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    if (!isPasswordValid(password)) {
      setError(
        'Recuerda que la contraseña debe contener al menos una mayúscula, una minúscula, un número, un símbolo y tener al menos 8 caracteres.'
      );
      return;
    }

    try {
      const response = await signup({ username, password });
      setError(''); // Limpiar el mensaje de error si el registro es exitoso
      navigate('/');
    } catch (error) {
      setError('Error en el registro. Inténtalo de nuevo.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Registrarse</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Correo Electrónico"
            fullWidth
            margin="normal"
            value={username}
            onChange={handleUsernameChange}
            error={!!error && !isEmailValid(username)}
            helperText={
              !isEmailValid(username) &&
              'Ingresa un correo electrónico válido.'
            }
          />
          <TextField
            label="Contraseña"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            error={!!error && !isPasswordValid(password)}
            helperText={
              !isPasswordValid(password) &&
              'La contraseña debe cumplir los requisitos.'
            }
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Registrarse
          </Button>
        </form>
        <Box mt={2}>
          <Typography variant="body2">
            ¿Ya tienes una cuenta?{' '}
            <Link href="/" color="primary">
              Iniciar Sesión
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterForm;
