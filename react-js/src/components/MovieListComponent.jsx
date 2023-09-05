import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import {
  Box,
  Button,
  Typography,
  CircularProgress,
  Grid,
  Paper,  
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Toolbar,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ItemMovieListComponent from './ItemMovieListComponent';

const MovieListComponent = ({ movies, loading, error, handleAddMovie }) => {
  return (
    <Box mt={4} p={2}>
      <Paper elevation={3}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <Typography variant="h4" component="div">
              Lista de Películas
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'end' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddMovie}
              startIcon={<AddIcon />} // Agrega un ícono para indicar la acción de agregar
              sx={{ // Estilos personalizados
                textTransform: 'none', // Evita las mayúsculas en el texto
                borderRadius: '24px', // Añade bordes redondeados
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Sutil sombra
                '&:hover': {
                  backgroundColor: '#1565C0', // Cambia el color de fondo al pasar el mouse
                },
              }}
            >              
              Agregar Película
            </Button>
          </Grid>
        </Grid>
      </Toolbar>

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="200px">
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography variant="body1" color="error" align="center">
            Ocurrió un error al cargar las películas. Por favor, inténtalo de nuevo más tarde.
          </Typography>
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Título</TableCell>
                  <TableCell>Director</TableCell>
                  <TableCell>Año de lanzamiento</TableCell>
                  <TableCell>Género</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {movies.map((movie) => (
                  <ItemMovieListComponent key={movie.id} movie={movie} handleEditMovie={handleAddMovie}>
                    <TableCell>
                      <IconButton color="primary" aria-label="Editar">
                        <EditIcon />
                      </IconButton>
                      <IconButton color="secondary" aria-label="Eliminar">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </ItemMovieListComponent>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </Box>
  );
};

export default MovieListComponent;
