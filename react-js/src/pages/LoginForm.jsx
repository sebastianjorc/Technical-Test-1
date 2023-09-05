import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
  Link,
} from '@mui/material';
import { MailOutline as MailOutlineIcon, VpnKey as VpnKeyIcon } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signin, isAuthenticated, authErrors } = useAuth();

  useEffect(() => {
    if (isAuthenticated) navigate('/dashboard');
  }, [isAuthenticated]);

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
    setEmailValid(isEmailValid(value));
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setPasswordValid(isPasswordValid(value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password || !emailValid || !passwordValid) {
      setError('Por favor, ingresa información válida en los campos.');
      return;
    }

    try {
      signin({ username, password });
      setError('');
      setUsername('');
      setPassword('');
      if (isAuthenticated) {
        navigate('/dashboard');
      } else {
        setError('Credenciales inválidas. Inténtalo de nuevo.');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Nombre de usuario o contraseña incorrectos.');
      } else {
        setError('Hubo un problema al iniciar sesión. Inténtalo de nuevo más tarde.');
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center', maxWidth: '400px' }}>
          <Typography variant="h5" gutterBottom>
            Iniciar Sesión
          </Typography>
          {error && (
            <Typography variant="body2" color="error" gutterBottom>
              {error}
            </Typography>
          )}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Correo Electrónico"
                  fullWidth
                  margin="normal"
                  value={username}
                  onChange={handleUsernameChange}
                  error={!emailValid}
                  helperText={!emailValid && 'Ingresa un correo electrónico válido.'}
                  InputProps={{
                    startAdornment: (
                      <MailOutlineIcon color="primary" />
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Contraseña"
                  fullWidth
                  margin="normal"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  error={!passwordValid}
                  helperText={!passwordValid && 'La contraseña debe cumplir los requisitos.'}
                  InputProps={{
                    startAdornment: (
                      <VpnKeyIcon color="primary" />
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Iniciar Sesión
            </Button>
          </form>
          <Box mt={2}>
            <Link href="/forgot-password" color="primary">
              ¿Olvidaste tu contraseña?
            </Link>
          </Box>
          <Box mt={2}>
            <Link href="/register" variant="body2">
              ¿No tienes una cuenta? Regístrate
            </Link>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginForm;
