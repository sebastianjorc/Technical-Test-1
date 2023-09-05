import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useMovie } from '../context/MovieContext';

const PopupMovieForm = ({ open, onClose, onSubmit, mode, initialData }) => {
  const [movieFormData, setMovieFormData] = useState({
    title: '',
    director: '',
    releaseYear: '',
    genre: '',
  });
  const { addMovie, updateMovie, movieToEdit } = useMovie();

useEffect(() => {
  if (mode === 'edit' && initialData) {
    // Si estamos en modo edición y tenemos datos iniciales, cargamos esos datos
    setMovieFormData(initialData);
  } else {
    // En modo agregar o sin datos iniciales, reseteamos el formulario
    setMovieFormData({
      id: '', // Asegúrate de incluir un campo para el id
      title: '',
      director: '',
      releaseYear: '',
      genre: '',
    });
  }
}, [mode, initialData]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieFormData({
      ...movieFormData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (mode === 'add') {
      // En modo agregar, llamamos a la función para agregar
      addMovie(movieFormData);
    } else if (mode === 'edit') {
      // En modo edición, llamamos a la función para actualizar
      const updatedFields = {
        title: movieFormData.title,
        director: movieFormData.director,
        releaseYear: movieFormData.releaseYear,
        genre: movieFormData.genre,
      };
      updateMovie(movieFormData.id, updatedFields); // Envia solo los campos actualizados
    }
  
    // Cerramos el diálogo después de agregar o editar
    onClose();
  };
  

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>
        <Typography variant="h6">
          {mode === 'add' ? 'Agregar Película' : 'Editar Película'}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Título"
              name="title"
              value={movieFormData.title}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Director"
              name="director"
              value={movieFormData.director}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Año de lanzamiento"
              name="releaseYear"
              value={movieFormData.releaseYear}
              onChange={handleChange}
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Género"
              name="genre"
              value={movieFormData.genre}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancelar
        </Button>
        <Button
          onClick={handleSubmit}
          color="primary"
          variant="contained"
          sx={{
            textTransform: 'none',
            borderRadius: '24px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              backgroundColor: '#1565C0',
            },
          }}
        >
          {mode === 'add' ? <AddIcon /> : 'Guardar'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopupMovieForm;