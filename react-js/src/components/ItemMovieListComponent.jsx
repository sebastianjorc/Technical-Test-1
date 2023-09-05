import React, { useState } from 'react';
import { TableRow, TableCell, IconButton, Tooltip, CircularProgress } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useMovie } from '../context/MovieContext';

const ItemMovieListComponent = ({ movie, handleEditMovie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { deleteMovie, movieToEdit, updateMovieToEdit } = useMovie();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleEditClick = () => {
    // Simular edición (aquí puedes agregar la lógica real)
    console.log(movie);
    updateMovieToEdit(movie);
    setIsEditing(true);
    setTimeout(() => {
      setIsEditing(false);
      handleEditMovie();
    }, 1000);
  };

  const handleDeleteClick = () => {
    // Simular eliminación (aquí puedes agregar la lógica real)
    setIsDeleting(true);
    console.log("DELETE: "+JSON.stringify(movie));
    deleteMovie(movie.id);
    setTimeout(() => {
      setIsDeleting(false);
    }, 3000);
  };

  return (
    <TableRow
      key={movie.id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: isHovered ? '#f0f0f0' : 'transparent' }}
    >
      <TableCell>{movie.title}</TableCell>
      <TableCell>{movie.director}</TableCell>
      <TableCell>{movie.releaseYear}</TableCell>
      <TableCell>{movie.genre}</TableCell>
      <TableCell>
        <Tooltip title="Editar" arrow>
          <IconButton
            color="primary"
            aria-label="Editar"
            onClick={handleEditClick}
            disabled={isEditing}            
          >
            {isEditing ? <CircularProgress size={20} /> : <EditIcon />}
          </IconButton>
        </Tooltip>
        <Tooltip title="Eliminar" arrow>
          <IconButton
            color="secondary"
            aria-label="Eliminar"
            onClick={handleDeleteClick}
            disabled={isDeleting}
          >
            {isDeleting ? <CircularProgress size={20} /> : <DeleteIcon />}
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

export default ItemMovieListComponent;
