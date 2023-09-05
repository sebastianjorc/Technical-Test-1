import React, { useState, useEffect } from 'react';
import {
  Button,
  Typography,
  Container,
  Grid,
  CircularProgress,
  Fab,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import NavbarComponent from '../components/NavbarComponent';
import MovieListComponent from '../components/MovieListComponent';
import PopupMovieForm from '../components/PopupMovieForm';
import AddIcon from '@mui/icons-material/Add';
import { useMovie } from '../context/MovieContext';

const useStyles = styled((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { user, isAuthenticated, authToken, logout } = useAuth();
  const { movies, loading, fetchMovies, movieToEdit } = useMovie();
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleLogout = async () => {
    try {
      logout();
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
  };

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleAddMovie = (movieData) => {
    // Agrega la lógica para guardar la película aquí
    console.log('Nueva película:', movieData);
    // Cierra el popup después de agregar una película
    handleClosePopup();
  };

  const handleEditMovie = (movieToEdit) => {
    // Agrega la lógica para guardar la película aquí
    console.log('Editar película:', movieToEdit);
    // Cierra el popup después de agregar una película
    handleClosePopup();
  };


  return (
    <div>
      <NavbarComponent onLogout={handleLogout} user={user} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            {loading ? (
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <CircularProgress />
              </div>
            ) : error ? (
              <Typography variant="body1" color="error" align="center" style={{ marginTop: '20px' }}>
                {error}
              </Typography>
            ) : (
              <MovieListComponent movies={movies} loading={loading} error={error} handleAddMovie={handleOpenPopup} />
            )}
          </Grid>
        </Grid>
      </Container>

      <PopupMovieForm
        open={isPopupOpen}
        onClose={handleClosePopup}
        onSubmit={handleAddMovie}
        mode="add"
      />

      <PopupMovieForm
        open={isPopupOpen}
        onClose={handleClosePopup}
        onSubmit={handleEditMovie}
        mode="edit"
        initialData={movieToEdit} //Donde "movieDataToEdit" es el objeto con los datos de la película a editar
      />



      {/* Botón flotante para agregar películas */}
      {isSmallScreen && (
        <Fab
          color="primary"
          aria-label="Agregar película"
          className={classes.fab}
          handleEditMovie={handleOpenPopup}
        >
          <AddIcon />
        </Fab>
      )}
    </div>
  );
};

export default Dashboard;
